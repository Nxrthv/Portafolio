document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Files/CV.pdf';
    link.download = 'Andres Vargas - Web Development - CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
