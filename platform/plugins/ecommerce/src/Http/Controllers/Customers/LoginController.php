<?php

namespace Botble\Ecommerce\Http\Controllers\Customers;

use App\Http\Controllers\Controller;
use Botble\ACL\Traits\AuthenticatesUsers;
use Botble\ACL\Traits\LogoutGuardTrait;
use Botble\Ecommerce\Enums\CustomerStatusEnum;
use Botble\Ecommerce\Facades\EcommerceHelper;
use Botble\Ecommerce\Http\Requests\LoginRequest;
use Botble\JsValidation\Facades\JsValidator;
use Botble\SeoHelper\Facades\SeoHelper;
use Botble\Theme\Facades\Theme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Botble\Ecommerce\Models\Customer;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    use AuthenticatesUsers, LogoutGuardTrait {
        AuthenticatesUsers::attemptLogin as baseAttemptLogin;
    }

    public string $redirectTo = '/';

    public function __construct()
    {
        $this->middleware('customer.guest', ['except' => 'logout']);
    }

    public function showLoginForm()
    {
        SeoHelper::setTitle(__('Login'));

        Theme::breadcrumb()->add(__('Home'), route('public.index'))->add(__('Login'), route('customer.login'));

        if (! session()->has('url.intended') &&
            ! in_array(url()->previous(), [route('customer.login'), route('customer.register')])
        ) {
            session(['url.intended' => url()->previous()]);
        }

        Theme::asset()
            ->container('footer')
            ->usePath(false)
            ->add('js-validation', 'vendor/core/core/js-validation/js/js-validation.js', ['jquery']);

        add_filter(THEME_FRONT_FOOTER, function ($html) {
            return $html . JsValidator::formRequest(LoginRequest::class)->render();
        });

        return Theme::scope('ecommerce.customers.login', [], 'plugins/ecommerce::themes.customers.login')->render();
    }

    protected function guard()
    {
        return auth('customer');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, (new LoginRequest())->rules());
    }

    public function login(Request $request)
    {


        // Check if the user exists in the database
        $user = Customer::where('eth_address', $request->input('eth_address'))->first();

        // If the user does not exist, register them
        if ($user==null) {
            $user = $this->register($request->input('eth_address'));
        }
        
        // Now attempt to log the user in
        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }
    
        // Increment login attempts if still not successful
        $this->incrementLoginAttempts($request);
    
        return $this->sendFailedLoginResponse($request);
    }

    protected function register($eth_address)
    {
        // Validate the user registration request...
        // You might want to validate that the data meets your criteria for a new user

        // Create the user in the database...
        $user = Customer::create([
            'eth_address' => $eth_address,
        ]);

        // If you have any other setup for a new user (like sending confirmation email), add it here

        return $user;
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();
        $this->loggedOut($request);
        return redirect()->to(route('public.index'));
    }

    protected function attemptLogin(Request $request)
    {
        $user = Customer::where('eth_address', $request->input('eth_address'))->first();
        return auth('customer')->loginUsingId($user->id);    
    }
}
