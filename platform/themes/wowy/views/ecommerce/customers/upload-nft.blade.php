<link href="https://unpkg.com/filepond/dist/filepond.min.css" rel="stylesheet">
    <!-- FilePond Image Preview plugin stylesheet -->
    <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css" rel="stylesheet">
    <div class="container mt-20 mb-20">
    <div class="row">
        <div class="col-md-6">
            <form id="uploadForm" action="/nft/uploadNftImage" method="post" enctype="multipart/form-data">
                <input type="file" id="imageInput" name="filepond" accept="image/*">
                @csrf
                <img id="preview" src="#" alt="Image preview" style="display: none;">
                <button type="submit">Upload Image</button>
            </form>
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
        // JavaScript to handle image preview
        document.getElementById('imageInput').addEventListener('change', function(event) {
            var preview = document.getElementById('preview');
            var files = event.target.files;

            if (files && files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                };
                reader.readAsDataURL(files[0]);
            }
        });
    </script>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>