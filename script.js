let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createList(obj) {
  let ul = document.createElement('ul');

  for (let item in obj) {
    let li = document.createElement('li');
    li.textContent = item;

    let child = createList(obj[item]);
    
    if (child) {
      li.append(child);
    }

    ul.append(li);
  }

  return ul;
}


function createTree(container, data) {
  container.append(createList(data));
}

createTree(document.querySelector('#list'), data);  
