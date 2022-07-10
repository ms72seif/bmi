function _bmi() {
    let _height = document.getElementById('height').value
    let _weight = document.getElementById('weight').value
    console.log(_height + '' + _weight)
    temp = ((parseInt(_weight)) / ((parseInt(_height)) * (parseInt(_height)))) * 10000
    temp = temp.toFixed(2)

    if (temp < 19) {
        document.getElementById('res').style.display = 'flex'
        document.getElementById('res').innerHTML = 'Your BMI is:' + temp + '<br>' + 'you are under whight'
        document.getElementById('res').style.backgroundColor = 'blue'
        document.querySelector('#art>h1').innerHTML = 'تیپ بدنی اكتومورف (Ectomorph)'
        document.querySelector('#art>h2:nth-of-type(1)').innerHTML = 'ویژگی های این تیپ :'
        document.querySelector('#art>h2:nth-of-type(2)').innerHTML =
            'استخوان بندی ظرف و نازک،قدِ بلند و استخوان بندی کشیده،سرشانه های کوچک و باریک،شانه و باسن کوچک،افراد با این تیپ معولا کم اشتها هستند و میزان خواب نامنظمی دارند'
        document.querySelector('#art>h2:nth-of-type(3)').innerHTML = 'غذاهای توصیه شده :'
        document.querySelector('#art>h2:nth-of-type(4)').innerHTML =
            'رژیم غذایی مناسب برای تیپ بدنی اکتومورف، شامل ۵۵٪ کربوهیدرات، ۲۵٪ پروتئین و ۲۰٪ چربی است. در این افراد، روند عضله‌سازی و  افزایش وزن، کند است. اکتومورف‌ها، برای افزایش وزن باید کالری بسیار بالایی مصرف کنند. افراد با تیپ بدنی اکتومورف، از سطح سلامت و طول عمر بیشتری نسبت به سایر تیپ‌های بدنی برخوردار هستند.'
        document.querySelector('#art>h2:nth-of-type(5)').innerHTML =
            'گوشت و مرغ،سبزیجات،شیر و تخم مرغ،انواع دانه‌های روغنی و آجیل،غلات و نان و ماکارونی'

    }
    if (temp > 19 && temp < 25) {
        document.getElementById('res').style.display = 'flex'
        document.getElementById('res').innerHTML = 'Your BMI is:' + temp + '<br>' + 'you are normal'
        document.getElementById('res').style.backgroundColor = 'green'
        document.querySelector('#art>h1').innerHTML = 'تیپ بدنی مزومورف (Mesomorph)'
        document.querySelector('#art>h2:nth-of-type(1)').innerHTML = 'ویژگی های این تیپ :'
        document.querySelector('#art>h2:nth-of-type(2)').innerHTML ='دارای شانه‌های پهن،دارای میان‌تنه و کمر باریك،بازوها و مفاصل و زانوهای نیرومند و قوی،اندام عضلانی به همراه ساعد و ران‌های قوی،میزان چربی کم در بدن،تعریق زیاد و احساس عطش،دارای اندامی به شکل ساعت شنی'
        document.querySelector('#art>h2:nth-of-type(3)').innerHTML = 'غذاهای توصیه شده :'
        document.querySelector('#art>h2:nth-of-type(4)').innerHTML ='رژیم غذایی مناسب برای تیپ بدنی مزومورف شامل ۴۰٪ کربوهیدرات، ۳۰٪ پروتئین و ۳۰٪ چربی است. مزومورف‌ها جز تیپ‌های بدنی ایده‌آل هستند. سرعت چربی سوزی و عضله سازی، در این دسته افراد بالا است ولی استعداد چاقی خوبی دارند، که در صورت کاهش تحرک و مصرف کالری زیاد به سرعت افزایش وزن پیدا می‌کنند. به دلیل استعاد چاقی بالای تیپ بدنی مزومورف، احتمال ابتلا به بیماری‌های قلبی و عروقی زیاد است.'
        

    }
    if (temp > 25) {
        document.getElementById('res').style.display = 'flex'
        document.getElementById('res').innerHTML = 'Your BMI is:' + temp + '<br>' + 'you are OverWeight'
        document.getElementById('res').style.backgroundColor = 'yellow'
        document.querySelector('#art>h1').innerHTML = 'تیپ بدنی اندومورف (Endomorph)'
        document.querySelector('#art>h2:nth-of-type(1)').innerHTML = 'ویژگی های این تیپ :'
        document.querySelector('#art>h2:nth-of-type(2)').innerHTML =' هیكلی با ظاهر چاق و گوشتی، دور كمر پهن،شانه‌های كم‌عرض،دست‌ها و پاهای كوتاه،دارای پهلوهای عریض ومیزان چربی بدنی بالا،اندام سیب شکل یا گلابی شکل'
        document.querySelector('#art>h2:nth-of-type(3)').innerHTML = 'غذاهای توصیه شده :'
        document.querySelector('#art>h2:nth-of-type(4)').innerHTML ='رژیم غذایی مناسب برای تیپ بدنی اندومورف، شامل ٪۲۵ کربوهیدرات، ۳۵٪ پروتئین و ۴۰٪ چربی است. تیپ بدنی اندومورف متضاد تیپ بدنی اکتومورف‌ است. افراد با تیپ بدنی اندومورف، به علت کم بودن سرعت چربی سوزی و سوخت و ساز بدن، بیشتر در معرض مشکلات سلامتی و ابتلا به چاقی مفرط هستند. در این تیپ‌ بدنی، افزایش وزن سرعت بسیار بالایی داشته و بدن تمایل بالایی به ذخیره چربی در قسمت میانی دارد.'
        document.querySelector('#art>h2:nth-of-type(5)').innerHTML ='گوشت و چربی های بدون چربی و غذاهای سرشار از سدیکن و کلیسم،روغن‌های سالم مانند روغن زیتون و ذرت،میوه و سبزیجات فراوان،غلات'

    }
    if (temp > 30) {
        document.getElementById('res').style.display = 'flex'
        document.getElementById('res').innerHTML = 'Your BMI is:' + temp + '<br>' + 'you are Above Obese'
        document.getElementById('res').style.backgroundColor = 'orange'
    }

}