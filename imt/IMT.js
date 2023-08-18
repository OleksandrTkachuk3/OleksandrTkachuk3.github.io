const inputKG = document.getElementById('inputKG')
const inputCM = document.getElementById('inputCM')
const submitBTN = document.getElementById('submit')
const resultNumElenment = document.getElementById('resultNum')
const resultNameElement = document.getElementById('resultName')
const descriptionElement = document.getElementById('description')


submitBTN.onclick = function () {
    const sum =Number(inputKG.value) / ((Number(inputCM.value) / 100) **2)
    resultNumElenment.textContent = sum
    if(isNaN(sum)){
        resultNameElement.textContent = '"Введите значение вашего роста и веса выше"'
        descriptionElement.textContent = '"Здесь будет отображенно описание ваших результатов"'
        resultNumElenment.textContent = 0;
    } else if (sum > 16 && sum < 18.49){
        resultNameElement.textContent = '"Худой"'
        descriptionElement.textContent = 'Похоже что пора прекращать с диетой. Внимание! Не советуем вам взбираться в горы, есть риск быть унесенным ветром.'

    } else if (sum >= 18.50 && sum <= 25){
        resultNameElement.textContent = '"Вы идеальны!"'
        descriptionElement.textContent = '"Если кто то скажет что нет- не верьте. Хотите слопать пару демократических бургеров - кушайте на здоровье, ведь вы уже доказали всему миру что знаете меру и умеете ловить баланс."'
    } else if(sum > 25 && sum <= 30){
        resultNameElement.textContent = '"Крепышь"'
        descriptionElement.textContent = '"Ходишь в качалку?"'
    } else if(sum > 30 && sum <= 35){
        resultNameElement.textContent = '"Ожирение 1 степени"'
        descriptionElement.textContent = '"Воу полегче... знаете, у крепости земной коры тоже есть предел."'
    } else if(sum > 35 && sum <= 40){
        resultNameElement.textContent = '"Ожирение 2 степени"'
        descriptionElement.textContent = '"Извините за нескромный вопрос но когда вы последний раз видели свои гениталии без помощи зеркала?..."'
    }else {
        resultNameElement.textContent = '"Смэрть..."'
        descriptionElement.textContent = '"Уважаемый пользователь вы совсем ебнулись?) Либо ваша жизнь может прекратиться еще до того как вы закроете этот сайт, либо вы ввели какую то хуйню. Помните - "Знать как правильно читать" и "УМЕТЬ читать"- это разные вещи. Попробуйте пожалуйста еще раз) .   (Комментарий для себя: грубовато... надо будет перефразировать)'
        console.log(sum);
    }
}

// 15,99 - дефицит

// 16,00 - 18,49 - недостаточно

// 18,50 — 24,99 - норма

// 25,00 — 29,99 - избыточно

// 30,00 — 34,99 - ожирение 1

// 35,00 — 39,99 - ожирение 2

// Более 40,00 - смэрть

// resultNameElement.textContent = '""'
// descriptionElement.textContent = '""'