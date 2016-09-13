var arr = [];
    for (var i=1; i<6; i++){
      arr[i]=prompt('Имя '+i);
		if(arr[i]=='' || arr[i]==null) {
			i--;
		}
    }
    var yourName = prompt('Введите ваше имя');
    var yourNameLowerCase =yourName.toLowerCase();
    var arrItem;
        var i=1;
    do {
        arrItem = arr[i].toLocaleLowerCase();
        if(arrItem==yourNameLowerCase){
            alert('Вы успешно вошли, '+yourName+'!');
            break;
        } else if(i<5){
         i++;
        } else {
        alert('Ошибка авторизации');
            break;
        }
        
    } while (i<6);

