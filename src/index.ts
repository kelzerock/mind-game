console.log('Hello world');
const div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
div.style.border = 'solid black 3px';
div.style.width = '200px';
div.style.height = '200px';
div.style.background = 'url("./public/image.jpg")';
document.body.append(div);
