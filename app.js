const prevIMG = document.getElementById('img-preview');
const uploaderIMG = document.getElementById('img-uploader');
const progressBar = document.getElementById('progress-bar');

const CLOUD_URL = 'API CLOUDINARY';
const UPLOAD_PRESET = 'PRESET CLOUDINARY';

uploaderIMG.addEventListener('change', async (e) => {
    progressBar.style.display = 'flex';
    const f = e.target.files[0];

    const formData = new FormData();
    formData.append('file', f);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await axios.post(CLOUD_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress(e) {
            const porcent = Math.round((e.loaded * 100) / e.total);
            progressBar.setAttribute('value', porcent);
        }
    });

prevIMG.src = res.data.secure_url

})