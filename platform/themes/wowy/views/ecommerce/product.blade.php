@php
    $layout = MetaBox::getMetaData($product, 'layout', true);
    $layout = ($layout && in_array($layout, array_keys(get_product_single_layouts()))) ? $layout : 'product-right-sidebar';
    Theme::layout($layout);

    Theme::asset()->usePath()->add('lightGallery-css', 'plugins/lightGallery/css/lightgallery.min.css');
    Theme::asset()->container('footer')->usePath()
        ->add('lightGallery-js', 'plugins/lightGallery/js/lightgallery.min.js', ['jquery']);
@endphp
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

<div class="product-detail accordion-detail">
    <div class="row mb-50">
        <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="detail-gallery">
                <div class="product-image-slider">
                    @foreach ($productImages as $img)
                        <figure class="border-radius-10">
                            <a href="{{ RvMedia::getImageUrl($img) }}">
                                <img src="{{ RvMedia::getImageUrl($img, 'medium') }}" alt="{{ $product->name }}">
                            </a>
                        </figure>
                    @endforeach
                </div>
                <!-- <div class="slider-nav-thumbnails pl-15 pr-15">
                    @foreach ($productImages as $img)
                        <div><img src="{{ RvMedia::getImageUrl($img, 'thumb') }}" alt="{{ $product->name }}"></div>
                    @endforeach
                </div> -->
            </div>
        </div>
        <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="artworkArea mt-4 mb-4">
                <div class="row">
                <div class="col-7"><h5 class='OwnerProfileInProduct'>PicassoDefi</h5></div>
                <div class='col-5' style='text-align:end;'>
                    <span id='likeProduct'> 0 <i class="fas fa-heart" style='color:#a3a3a3;font-size:larger'></i></span> 
                    <span id='shareProduct'><i class="fa fa-share-alt ml-5" style='color:#a3a3a3;font-size:larger'></i></span>
                </div>
                </div>

            </div>
            <div class="detail-info">
                <h2 class="title-detail">{{ $product->name }}</h2>
                <!-- <div class="product-detail-rating">
                    @if ($product->brand->id)
                        <div class="pro-details-brand">
                            <span class="d-inline-block me-1">{{ __('Brands') }}:</span> <a href="{{ $product->brand->url }}">{{ $product->brand->name }}</a>
                        </div>
                    @endif

                    @if (EcommerceHelper::isReviewEnabled())
                        <div class="product-rate-cover text-end">
                            <div class="rating_wrap">
                                <div class="rating">
                                    <div class="product_rate" style="width: {{ $product->reviews_avg * 20 }}%"></div>
                                </div>
                                <span class="rating_num">({{ __(':count reviews', ['count' => $product->reviews_count]) }})</span>
                            </div>
                        </div>
                    @endif
                </div> -->
                <div class="clearfix product-price-cover">
                    <div class="product-price primary-color float-left">
                        <ins><span class="text-brand">{{ format_price($product->front_sale_price_with_taxes) }} <span id="usdtPrice" style='color:#a3a3a3;font-size:x-small'> ≈ Loading price...</span> </span> </ins>
                        @if ($product->front_sale_price !== $product->price)
                            <ins><span class="old-price font-md ml-15">{{ format_price($product->price_with_taxes) }}</span></ins>
                            <span class="save-price font-md color3 ml-15">
                                <span class="percentage-off d-inline-block">{{ get_sale_percentage($product->price, $product->front_sale_price) }}</span> 
                                
                            </span>
                        @endif
                    </div>
                </div>
                <div class="mt-15 mb-15">

                <div class="accordion" id="productDetailsAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingDetails">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDetails" aria-expanded="true" aria-controls="collapseDetails">
                        <i class="fa-solid fa-file"></i> Details
                        </button>
                        </h2>
                        <div id="collapseDetails" class="accordion-collapse collapse" aria-labelledby="headingDetails" data-bs-parent="#productDetailsAccordion">
                        <div class="accordion-body">
                            <p><strong>Category:</strong> Gaming</p>
                            <p><strong>Creator:</strong> Bitcoin-Art</p>
                            <p><strong>Owner:</strong> Anonymous-User-e6801</p>
                            <p><strong>Network:</strong> BNB Chain</p>
                            <p><strong>Contract Address:</strong> 0x98d8...a8df</p>
                            <p><strong>Token ID:</strong> 1356300000265</p>
                            <p><strong>Royalty Fee:</strong> 9.9%</p>
                            <p><strong>Platform Fee:</strong> 1%</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion" id="productDescAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingDetails">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDetails1" aria-expanded="true" aria-controls="collapseDetails">
                        <i class="fa-solid fa-file-lines"></i> &nbsp Description
                        </button>
                        </h2>
                        <div id="collapseDetails1" class="accordion-collapse collapse" aria-labelledby="headingDetails" data-bs-parent="#productDescAccordion">
                        <div class="accordion-body">
                            <p><strong>400 x 400 px.IMAGE(576KB)</strong></p>
                            <p><strong>Ethereum pEPE aPE NFT</strong></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class='mt-4'><span class="d-inline-block me-1">{{ __('Availability') }}:</span> <span class="in-stock text-success ml-5">{!! BaseHelper::clean($product->stock_status_html) !!}</span></div>

                
                <!-- <div class="short-desc mb-30">
                    {!! apply_filters('ecommerce_before_product_description', null, $product) !!}
                    {!! BaseHelper::clean($product->description) !!}
                    {!! apply_filters('ecommerce_after_product_description', null, $product) !!}
                </div> -->

                <div class="bt-1 border-color-1 mt-30 mb-30"></div>
                <form class="add-to-cart-form" method="POST" action="{{ route('public.cart.add-to-cart') }}">
                    @csrf

                    <!-- @if ($product->variations()->count() > 0)
                        <div class="pr_switch_wrap">
                            {!! render_product_swatches($product, [
                                'selected' => $selectedAttrs,
                                'view'     => Theme::getThemeNamespace() . '::views.ecommerce.attributes.swatches-renderer'
                            ]) !!}
                        </div>
                        <div class="number-items-available" style="@if (!$product->isOutOfStock()) display: none; @endif margin-bottom: 10px;">
                            @if ($product->isOutOfStock())
                                <span class="text-danger">({{ __('Out of stock') }})</span>
                            @endif
                        </div>
                    @endif

                    {!! render_product_options($product) !!} -->

                    {!! apply_filters(ECOMMERCE_PRODUCT_DETAIL_EXTRA_HTML, null, $product) !!}
                    <input type="hidden" name="id" class="hidden-product-id" value="{{ ($product->is_variation || !$product->defaultVariation->product_id) ? $product->id : $product->defaultVariation->product_id }}"/>
                    <div class="detail-extralink">
                        <!-- @if (EcommerceHelper::isCartEnabled())
                            <div class="detail-qty border radius">
                                <a href="#" class="qty-down"><i class="fa fa-caret-down" aria-hidden="true"></i></a>
                                <input type="number" min="1" value="1" name="qty" class="qty-val qty-input" />
                                <a href="#" class="qty-up"><i class="fa fa-caret-up" aria-hidden="true"></i></a>
                            </div>
                        @endif -->

                        <div class="product-extra-link2 col-12 @if (EcommerceHelper::isQuickBuyButtonEnabled()) has-buy-now-button @endif">
                        <button class="button btn_ingress button-buy-now ms-2 @if ($product->isOutOfStock()) btn-disabled @endif col-12" type="submit" name="checkout" @if ($product->isOutOfStock()) disabled @endif style='background-color:#ff0076'>{{ __('Buy Now') }}</button>

                            <!-- @if (EcommerceHelper::isCartEnabled())
                                <button type="submit" class="button button-add-to-cart @if ($product->isOutOfStock()) btn-disabled @endif" type="submit" @if ($product->isOutOfStock()) disabled @endif>{{ __('Add to cart') }}</button>
                                @if (EcommerceHelper::isQuickBuyButtonEnabled())
                                @endif
                            @endif

                            @if (EcommerceHelper::isWishlistEnabled())
                                <a aria-label="{{ __('Add To Wishlist') }}" class="action-btn hover-up js-add-to-wishlist-button" data-url="{{ route('public.wishlist.add', $product->id) }}" href="#"><i class="far fa-heart"></i></a>
                            @endif
                            @if (EcommerceHelper::isCompareEnabled())
                                <a aria-label="{{ __('Add To Compare') }}" href="#" class="action-btn hover-up js-add-to-compare-button" data-url="{{ route('public.compare.add', $product->id) }}"><i class="far fa-exchange-alt"></i></a>
                            @endif -->
                        </div>
                    </div>
                </form>
                <!-- <ul class="product-meta font-xs color-grey mt-50">

                    <li class="mb-5 @if (! $product->sku) d-none @endif"><span class="d-inline-block me-1" id="product-sku">{{ __('SKU') }}</span>: <span>{{ $product->sku }}</span></li>

                    @if ($product->categories->count())
                        <li class="mb-5"><span class="d-inline-block me-1">{{ __('Categories') }}:</span>
                        @foreach($product->categories as $category)
                            <a href="{{ $category->url }}" title="{{ $category->name }}">{{ $category->name }}</a>@if (!$loop->last),@endif
                        @endforeach
                    </li>
                    @endif
                    @if ($product->tags->count())
                        <li class="mb-5"><span class="d-inline-block me-1">{{ __('Tags') }}:</span>
                        @foreach($product->tags as $tag)
                            <a href="{{ $tag->url }}" rel="tag" title="{{ $tag->name }}">{{ $tag->name }}</a>@if (!$loop->last),@endif
                        @endforeach
                        </li>
                    @endif

                    <li><span class="d-inline-block me-1">{{ __('Availability') }}:</span> <span class="in-stock text-success ml-5">{!! BaseHelper::clean($product->stock_status_html) !!}</span></li>
                </ul> -->
            </div>
            <!-- Detail Info -->

        </div>
    </div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>

<script>

    function fetchBNBPrice() {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
        .then(response => response.json())
        .then(data => {
            console.log('BNB Price in USDT:', data.price);  
            var productPrice = {{ $product->front_sale_price_with_taxes }}; // Replace this with your actual backend variable
            var bnbPrice = parseFloat(data.price);
            var total = productPrice * bnbPrice;
            document.getElementById('usdtPrice').innerText = ' ≈ ' + total.toFixed(2) + ' $';


        })
        .catch(error => {
            console.error('Error fetching BNB price:', error);
        });
}

// Update price every second
setInterval(fetchBNBPrice, 1000);
</script>