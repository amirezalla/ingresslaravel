<link href="https://unpkg.com/filepond/dist/filepond.min.css" rel="stylesheet">
    <!-- FilePond Image Preview plugin stylesheet -->
    <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css" rel="stylesheet">
    <div class="container mt-20 mb-20">
    <div class="row">
        <div class="col-md-6">
            <!-- Drag and Drop Area -->
            <div class="border d-flex justify-content-center align-items-center" style="height: 200px;">
            <input type="file" class="filepond" name="filepond" id="filepond" />
            <p>{{ csrf_token() }}</p>
        </div>
        </div>
        <div class="col-md-6">
            <!-- Artwork Details Form -->
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name of your artwork">
                </div>
                <input type="hidden" id="hiddenImageurl" name="hiddenImageurl" value="">
                <div class="form-group">
                    <select class="form-control">
                        <option selected>Category</option>
                        <!-- getting Categories from db -->
                        <option value="abstract">Abstract</option>
                        <option value="figurative">Figurative</option>
                        <option value="landscape">Landscape</option>
                        <!-- More categories -->
                    </select>
                </div>
                <div class="form-row row">
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Height">
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Width">
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Depth">
                    </div>
                </div>
                <div class="form-group mt-2">
                    <textarea class="form-control" rows="9" placeholder="Description"></textarea>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Creator name">
                </div>
                <button type="submit" class="col-12 btn btn-primary btn-block">Mint</button>
            </form>
        </div>
    </div>
</div>

<script src="https://unpkg.com/filepond/dist/filepond.min.js"></script>
<!-- FilePond plugins -->
<script src="https://unpkg.com/filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.min.js"></script>
<script src="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.js"></script>
<script>

    document.addEventListener('DOMContentLoaded', () => {
        const inputElement = document.querySelector('input[type="file"]');
        const pond = FilePond.create(document.querySelector('.filepond'), {
        allowMultiple: false,
        maxFiles: 1,
        server: {
            url: '/nft/uploadNftImage',
            process: {
                url: '/',
                method: 'POST',
                withCredentials: false,
                timeout: 7000,
                onload: null,
                onerror: null,
                ondata: null
            }
        },
        acceptedFileTypes: ['image/*'],
        // ... other options
    });
    });
    </script>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>