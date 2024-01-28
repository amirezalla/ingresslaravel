<link href="https://unpkg.com/filepond/dist/filepond.min.css" rel="stylesheet">
    <!-- FilePond Image Preview plugin stylesheet -->
    <link href="https://unpkg.com/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css" rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <div class="container mt-20 mb-20">
    <div class="row">
        <div class="col-md-6">
            <form id="uploadForm" class='file-upload-wrapper' action="/nft/uploadNftImage" method="post" enctype="multipart/form-data">
                <input type="file" id="imageInput" class='file-upload-input' name="filepond" accept="image/*">
                <i class="fa fa-upload" id='icon-upload'></i>
                <div class="drag-text" id='drag-text'>
                    Drag and drop your image here
                </div>
                @csrf
                <img id="preview" src="#" alt="Image preview" style="display: none; max-height: 270px;">
            </form>
        </div>
        <div class="col-md-6">
            <!-- Artwork Details Form -->
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name of your artwork" id='artWorkName'>
                </div>
                <input type="hidden" id="hiddenImageurl" name="hiddenImageurl" value="">                
                <input type="hidden" id="hiddenImageIpfs" name="hiddenImageIpfs" value="">                
                <div class="form-group">
                    <select class="form-control" id="category">
                        <option selected>Category</option>
                        <option value="abstract">Abstract</option>
                        <option value="figurative">Figurative</option>
                        <option value="landscape">Landscape</option>
                    </select>
                </div>
                <div class="form-row row">
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Height" id='height'>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Width" id='width'>
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Depth" id='depth'>
                    </div>
                </div>
                <div class="form-group mt-2">
                    <textarea class="form-control" rows="9" placeholder="Description" id='description'></textarea>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Creator name" id='creatorName'>
                </div>
                <button type="submit" class="col-12 btn btn_ingress btn-block" id='btn_submit_mint' > Mint </button>
            </form>
        </div>
    </div>
</div>




<script>
        // JavaScript to handle image preview
        document.getElementById('imageInput').addEventListener('change', async function(event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];

            // Show SweetAlert for the ongoing process
            Swal.fire({
                title: 'Uploading...',
                html: 'Please wait while we upload your file',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                },
            });
            var preview = document.getElementById('preview');
            var dragText = document.getElementById('drag-text');
            var iconUpload = document.getElementById('icon-upload');

            var files = event.target.files;
            if (files && files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                    dragText.style.display='none';
                    iconUpload.style.display='none';
                };
                reader.readAsDataURL(files[0]);
                reader.onloadend=function() {
                    // Convert image to binary data
                    var ipfsFormData = new FormData();
                    ipfsFormData.append("file", new Blob([reader.result], { type: file.type }), file.name);

                    // Show alert that we are uploading to IPFS
                    Swal.fire({
                        title: 'Uploading to IPFS...',
                        html: 'Please wait while we upload your file to IPFS',
                        allowOutsideClick: false,
                        onBeforeOpen: () => {
                            Swal.showLoading();
                        },
                    });
                    const projectId = '2LgfAX8FhCBfZ5UmJymQh5FTcq2'; // Replace with your Infura Project ID
                    const projectSecret = '6b2582086ac5ea2d15891314e0462603'; // Replace with your Infura Project Secret
                    const auth = btoa(`${projectId}:${projectSecret}`);
                    // Upload to IPFS
                    fetch('https://ingressdefi.infura-ipfs.io:5001/api/v0/add', {
                        headers: {
                            'Authorization': `Basic ${auth}`,
                        },
                        method: 'POST',
                        body: ipfsFormData
                    })
                    .then(response => response.json())
                    .then(ipfsResult => {
                        if(ipfsResult && ipfsResult.Hash) {
                            Swal.update({
                                title: 'IPFS Upload Complete!',
                                html: 'Now uploading to server.',
                                allowOutsideClick: false,
                            });


                            // Here, you can handle the IPFS hash. For example:
                            // Store it in your database, or
                            // Attach it to the form data you'll send to your server
                            var formData = new FormData();
                            document.getElementById('hiddenImageIpfs').value = ipfsResult.Hash;
                            formData.append('filepond', file);

                            // Add other form data and continue with your existing process

                            var csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

                            
                            // AJAX request to server
                            fetch('/nft/uploadNftImage', {
                                method: 'POST',
                                body: formData,
                                headers: {
                                'X-CSRF-TOKEN': csrfToken
                                }
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log(data.path);
                                if (data && data.path) {
                                    // Set the value of the hidden input field with id 'hiddenImageUrl'
                                    document.getElementById('hiddenImageurl').value = data.path;
                                } else {
                                    // Handle the case where the JSON response does not contain 'path'
                                    throw new Error('Path not found in response');
                                }
                                Swal.fire(
                                    'Uploaded!',
                                    'Your file has been uploaded successfully.',
                                    'success'
                                );
                            })
                            .catch(error => {
                                Swal.fire(
                                    'Error!',
                                    'There was a problem uploading your file.',
                                    'error'
                                );
                            });

                        } else {
                            throw new Error('IPFS upload error');
                        }
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'There was a problem uploading your file to IPFS.',
                            'error'
                        );
                    });
                };
            }   

            
        }
    });

    </script>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
