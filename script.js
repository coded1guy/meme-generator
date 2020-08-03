// GENERAL DECLARATION
let imageInput, generateBtn, canvas, ctx, txt1, txt2, txt3, txt4, txt5, addButton, dropBtnUn, dropBtnDuex, 
dropBtnTrois, dropBtnQuatre, dropBtnCinq;

// FOR THE FIRST INPUT TEXT
let txtInputUn, txtSizeInputUn, xAxisUn, yAxisUn, txtColorUn, txtBorderColorUn, lineHeightUn;

// FOR THE SECOND INPUT TEXT
let txtInputDuex, txtSizeInputDuex, xAxisDuex, yAxisDuex, txtColorDuex, txtBorderColorDuex, lineHeightDuex;

// FOR THE THIRD INPUT TEXT
let txtInputTrois, txtSizeInputTrois, xAxisTrois, yAxisTrois, txtColorTrois, 
txtBorderColorTrois, lineHeightTrois;

// FOR THE FOURTH INPUT TEXT
let txtInputQuatre, txtSizeInputQuatre, xAxisQuatre, yAxisQuatre, txtColorQuatre, 
txtBorderColorQuatre, lineHeightQuatre;

// FOR THE FIFTH INPUT TEXT
let txtInputCinq, txtSizeInputCinq, xAxisCinq, yAxisCinq, txtColorCinq, txtBorderColorCinq, lineHeightCinq;


// GENERATE IMAGE FUNCTION
function generateMeme(img,
    // TEXT 1
    txtUn, txtSizeUn, x_AxisUn, y_AxisUn, txtColorUn, txtBColorUn, lineHeightUn,
    // text 2
    txtDuex, txtSizeDuex, x_AxisDuex, y_AxisDuex, txtColorDuex, txtBColorDuex, lineHeightDuex,
    // TEXT 3
    txtTrois, txtSizeTrois, x_AxisTrois, y_AxisTrois, txtColorTrois, txtBColorTrois, lineHeightTrois,
    // text 4
    txtQuatre, txtSizeQuatre, x_AxisQuatre, y_AxisQuatre, txtColorQuatre, txtBColorQuatre, lineHeightQuatre,
    // TEXT 5
    txtCinq, txtSizeCinq, x_AxisCinq, y_AxisCinq, txtColorCinq, txtBColorCinq, lineHeightCinq
    ) {
    let fontSize, x, y, lines;

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    // DRAW TEXT FUMCTION
    function drawText() {
        let position = 'center';

        // TEXT 1
        ctx.fillStyle = txtColorUn;
        ctx.strokeStyle = txtBColorUn;
        ctx.textAlign = position;
    
        // top size stuff
        fontSize = canvas.width * txtSizeUn;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
    
    
        ctx.textBaseline = 'top';
        
        x = canvas.width * x_AxisUn;
        y = canvas.height * y_AxisUn;
        lines = txtUn.split('\n');
    
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], x, y + (i * lineHeightUn) );
            ctx.strokeText(lines[i], x, y + (i * lineHeightUn) );
        }

        // TEXT 2
        ctx.fillStyle = txtColorDuex;
        ctx.strokeStyle = txtBColorDuex;
        ctx.textAlign = position;
    
        // top size stuff
        fontSize = canvas.width * txtSizeDuex;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
    
    
        ctx.textBaseline = 'top';
        
        x = canvas.width * x_AxisDuex;
        y = canvas.height * y_AxisDuex;
        lines = txtDuex.split('\n');
    
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], x, y + (i * lineHeightDuex) );
            ctx.strokeText(lines[i], x, y + (i * lineHeightDuex) );
        }

        // TEXT 3
        ctx.fillStyle = txtColorTrois;
        ctx.strokeStyle = txtBColorTrois;
        ctx.textAlign = position;
    
        // top size stuff
        fontSize = canvas.width * txtSizeTrois;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
    
    
        ctx.textBaseline = 'top';
        
        x = canvas.width * x_AxisTrois;
        y = canvas.height * y_AxisTrois;
        lines = txtTrois.split('\n');
    
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], x, y + (i * lineHeightTrois) );
            ctx.strokeText(lines[i], x, y + (i * lineHeightTrois) );
        }

        // TEXT 4
        ctx.fillStyle = txtColorQuatre;
        ctx.strokeStyle = txtBColorQuatre;
        ctx.textAlign = position;
    
        // top size stuff
        fontSize = canvas.width * txtSizeQuatre;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
    
    
        ctx.textBaseline = 'top';
        
        x = canvas.width * x_AxisQuatre;
        y = canvas.height * y_AxisQuatre;
        lines = txtQuatre.split('\n');
    
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], x, y + (i * lineHeightQuatre) );
            ctx.strokeText(lines[i], x, y + (i * lineHeightQuatre) );
        }

        // TEXT 5
        ctx.fillStyle = txtColorCinq;
        ctx.strokeStyle = txtBColorCinq;
        ctx.textAlign = position;
    
        // top size stuff
        fontSize = canvas.width * txtSizeCinq;
        ctx.font = fontSize + 'px Impact';
        ctx.lineWidth = fontSize / 20;
    
    
        ctx.textBaseline = 'top';
        
        x = canvas.width * x_AxisCinq;
        y = canvas.height * y_AxisCinq;
        lines = txtCinq.split('\n');
    
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], x, y + (i * lineHeightCinq) );
            ctx.strokeText(lines[i], x, y + (i * lineHeightCinq) );
        }
    }
    drawText();
}

// VARIABLE INITIALIZATION
function init () {
    // INITIALIZING COMMON VARIABLES
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    txt1 = document.getElementById('txt1');
    txt2 = document.getElementById('txt2');
    txt3 = document.getElementById('txt3');
    txt4 = document.getElementById('txt4');
    txt5 = document.getElementById('txt5');
    addButton = document.getElementById('add-text');
    dropBtnUn = document.getElementById('dB1');
    dropBtnDuex = document.getElementById('dB2');
    dropBtnTrois = document.getElementById('dB3');
    dropBtnQuatre = document.getElementById('dB4');
    dropBtnCinq = document.getElementById('dB5');

    // INITIALIZING TEXT 1 VARIABLES
    txtInputUn = document.getElementById('text-one');
    txtSizeInputUn = document.getElementById('text-one-size-input');
    xAxisUn = document.getElementById('one-x-position');
    yAxisUn = document.getElementById('one-y-position');
    txtColorUn = document.getElementById('text-one-color');
    txtBorderColorUn = document.getElementById('text-one-border-color');
    lineHeightUn = document.getElementById('line-one-height');

    // INITIALIZING TEXT 2 VARIABLES
    txtInputDuex = document.getElementById('text-two');
    txtSizeInputDuex = document.getElementById('text-two-size-input');
    xAxisDuex = document.getElementById('two-x-position');
    yAxisDuex = document.getElementById('two-y-position');
    txtColorDuex = document.getElementById('text-two-color');
    txtBorderColorDuex = document.getElementById('text-two-border-color');
    lineHeightDuex = document.getElementById('line-two-height');

    // INITIALIZING TEXT 3 VARIABLES
    txtInputTrois = document.getElementById('text-three');
    txtSizeInputTrois = document.getElementById('text-three-size-input');
    xAxisTrois = document.getElementById('three-x-position');
    yAxisTrois = document.getElementById('three-y-position');
    txtColorTrois = document.getElementById('text-three-color');
    txtBorderColorTrois = document.getElementById('text-three-border-color');
    lineHeightTrois = document.getElementById('line-three-height');
    
    // INITIALIZING TEXT 4 VARIABLES
    txtInputQuatre = document.getElementById('text-four');
    txtSizeInputQuatre = document.getElementById('text-four-size-input');
    xAxisQuatre = document.getElementById('four-x-position');
    yAxisQuatre = document.getElementById('four-y-position');
    txtColorQuatre = document.getElementById('text-four-color');
    txtBorderColorQuatre = document.getElementById('text-four-border-color');
    lineHeightQuatre = document.getElementById('line-four-height');

    // INITIALIZING TEXT 5 VARIABLES
    txtInputCinq = document.getElementById('text-five');
    txtSizeInputCinq = document.getElementById('text-five-size-input');
    xAxisCinq = document.getElementById('five-x-position');
    yAxisCinq = document.getElementById('five-y-position');
    txtColorCinq = document.getElementById('text-five-color');
    txtBorderColorCinq = document.getElementById('text-five-border-color');
    lineHeightCinq = document.getElementById('line-five-height');
    
    
    txt2.style.display = 'none';
    txt3.style.display = 'none';
    txt4.style.display = 'none';
    txt5.style.display = 'none';

    ctx = canvas.getContext('2d');

    //canvas.width = canvas.height = 0;
    let reader = new FileReader();
    generateBtn.addEventListener('click', function () {
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, 
                // TEXT 1
                txtInputUn.value, txtSizeInputUn.value, xAxisUn.value, yAxisUn.value, 
                txtColorUn.value, txtBorderColorUn.value, lineHeightUn.value, 
                // TEXT 2
                txtInputDuex.value, txtSizeInputDuex.value, xAxisDuex.value, yAxisDuex.value, 
                txtColorDuex.value, txtBorderColorDuex.value, lineHeightDuex.value,
                // TEXT 3
                txtInputTrois.value, txtSizeInputTrois.value, xAxisTrois.value, yAxisTrois.value, 
                txtColorTrois.value, txtBorderColorTrois.value, lineHeightTrois.value, 
                // TEXT 4
                txtInputQuatre.value, txtSizeInputQuatre.value, xAxisQuatre.value, yAxisQuatre.value, 
                txtColorQuatre.value, txtBorderColorQuatre.value, lineHeightQuatre.value,
                // TEXT 5
                txtInputCinq.value, txtSizeInputCinq.value, xAxisCinq.value, yAxisCinq.value, 
                txtColorCinq.value, txtBorderColorCinq.value, lineHeightCinq.value
            );
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
    addButton.addEventListener('click', function () {
        console.log('im working');
        if (txt2.style.display == 'none') {
            txt2.style.display = 'block';
        }
        else if (txt2.style.display == 'block' && txt3.style.display == 'none') {
            txt3.style.display = 'block';
        } else if (txt2.style.display == 'block' && txt3.style.display == 'block' 
        && txt4.style.display == 'none') {
            txt4.style.display = 'block';
        } else {
            txt5.style.display = 'block';
            if (txt5.style.display == 'block') {
                addButton.style.display = 'none';
            }
        }
    });

    // HIDE AND SHOW TEXT PROPERTIES
    let setting1 = document.querySelector('#set1');
    let setting2 = document.querySelector('#set2');
    let setting3 = document.querySelector('#set3');
    let setting4 = document.querySelector('#set4');
    let setting5 = document.querySelector('#set5');

    setting1.style.display = 'none';
    setting2.style.display = 'none';
    setting3.style.display = 'none';
    setting4.style.display = 'none';
    setting5.style.display = 'none';

    dropBtnUn.addEventListener('click', function () {
        if (setting1.style.display == 'none') {
            setting1.style.display = 'block';
        } else {
            setting1.style.display = 'none';
        }
    });
    dropBtnDuex.addEventListener('click', function () {
        if (setting2.style.display == 'none') {
            setting2.style.display = 'block';
        } else {
            setting2.style.display = 'none';
        }
    });
    dropBtnTrois.addEventListener('click', function () {
        if (setting3.style.display == 'none') {
            setting3.style.display = 'block';
        } else {
            setting3.style.display = 'none';
        }
    });
    dropBtnQuatre.addEventListener('click', function () {
        if (setting4.style.display == 'none') {
            setting4.style.display = 'block';
        } else {
            setting4.style.display = 'none';
        }
    });
    dropBtnCinq.addEventListener('click', function () {
        if (setting5.style.display == 'none') {
            setting5.style.display = 'block';
        } else {
            setting5.style.display = 'none';
        }
    });
    // CALLING THE IMAGE UPLOAD
    
//var imageUrl;
document.querySelector("#imageUpload").addEventListener('click', function() {
    document.querySelector("#image-input").click();
});

// IMAGE UPLOAD SEQUENCE
document.querySelector("#image-input").addEventListener('change', function() {
    var file = this.files[0];
    // SET THE FILE NAME
    document.querySelector("#imageName").innerText = file.name;
    document.querySelector("#imageName").style.display = 'block';
    // GET THE LOCAL URL
    //imageUrl = URL.createObjectURL(file);
});
}

init();