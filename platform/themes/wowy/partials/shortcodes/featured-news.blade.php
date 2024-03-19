<section class="section-padding-60">
    <div class="container">
        <div class="col-12">
            @if (clean($title))
                <h3 class="section-title style-1 mb-30 wow fadeIn animated">{!! BaseHelper::clean($title) !!}</h3>
            @endif

            <div class="post-list mb-4 mb-lg-0">
                <div class="row">
                    @foreach ($posts as $post)
                        <article class="wow fadeIn animated col-lg-6">
                            <div class="d-md-flex d-block"
                                style="
                            padding: 10px;
                            border: 1px solid #ffffff12;
                            border-radius: 6px;
                            background: #ffffff14;
                        ">
                                <div class="post-thumb d-flex mr-15 border-radius-10">
                                    <a class="color-white" href="{{ $post->url }}">
                                        <img class="border-radius-10" src="{{ RvMedia::getImageUrl($post->image) }}"
                                            alt="{{ $post->name }}">
                                    </a>
                                </div>
                                <div class="post-content">
                                    <div class="entry-meta mb-5 mt-10">
                                        <a class="entry-meta meta-2" href="{{ $post->firstCategory->url }}"><span
                                                class="post-in text-danger font-x-small text-uppercase">{{ $post->firstCategory->name }}</span></a>
                                    </div>
                                    <h5 class="post-title mt-15 mb-25 text-limit-2-row fw-100">
                                        <a style="color:white!important"
                                            href="{{ $post->url }}">{{ $post->name }}</a>
                                    </h5>
                                    <div class="entry-meta meta-1 font-xs color-grey mt-10 pb-10">
                                        <div>
                                            <span class="post-on"> <i class="far fa-clock"></i>
                                                {{ $post->created_at->translatedFormat('d M Y') }}</span>
                                            <span class="hit-count has-dot">{{ number_format($post->views) }}
                                                {{ __('Views') }}</span>
                                        </div>
                                        <a href="{{ $post->url }}"
                                            style="color:#ff0076 !important">{{ __('Read more') }} <i
                                                class="fa fa-arrow-right font-xxs ml-5"></i></a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
