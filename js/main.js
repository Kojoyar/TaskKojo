// 3. Запрашивать у пользователя имена студентов и возраст, если возраст больше 18, то добавлять его в массив let milashki_JS29 = [], а иначе добавлять в массив let vseOstalnye = [], делать проверку есть ли такой студентов в списке, если есть то не добавлять

// let milashki_JS29 = [];
// let vseOstalnye = [];
// while (true) {
//   let unique = true;
//   let userName = prompt("Введите ваше name");
//   let userAge = prompt("Введите ваш age");

//   for (let i = 0; i < milashki_JS29.length; i++) {
//     if (
//       userName == milashki_JS29[i].userName &&
//       userAge == milashki_JS29[i].userAge
//     ) {
//       alert("Такой логин уже есть");
//       unique = false;
//     }
//   }

//   for (let j = 0; j < vseOstalnye.length; j++) {
//     if (
//       userName == vseOstalnye[j].userName &&
//       userAge == vseOstalnye[j].userAge
//     ) {
//       alert("Такой логин уже");
//       unique = false;
//     }
//   }
//   if (!unique) continue;
//   if (userAge > 18) {
//     milashki_JS29.push({
//       userName,
//       userAge,
//     });
//   } else {
//     vseOstalnye.push({
//       userName,
//       userAge,
//     });
//   }

//   let ask = confirm("Continue?");
//   if (!ask) break;
// }
// console.log(milashki_JS29);
// console.log(vseOstalnye);

// 4. Запрашивать у пользователя имена , пока он не решит остановиться, все имена положить в массив. Нужно разбить их по парам в (в случайном порядке). Если не четное количество имен, последнего человека без пары засунуть в пару с текстом - 'без пары'; В консоли вывести вложенный массив, где внутренний массив будет одной парой; example [['Sultan', 'Ilya'], ['Tom', 'Jerry'], ['Howard', 'без пары']];
// const names = [];

// while (true) {
//   const name = prompt("Введите имя: ");
//   if (name === "") {
//     break;
//   }
//   names.push(name);
// }

// names.sort(() => Math.random() - 0.5);

// const pairs = [];

// for (let i = 0; i < names.length; i += 2) {
//   if (i + 1 < names.length) {
//     pairs.push([names[i], names[i + 1]]);
//   } else {
//     pairs.push([names[i], "без пары"]);
//   }
// }
// console.log(pairs);
// 5.1. Дан массив с постами:
// let posts = [
//     {
//       userId: 1,
//       id: 1,
//       title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "qui est esse",
//       body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
//     },
//     {
//       userId: 1,
//       id: 4,
//       title: "eum et est occaecati",
//       body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
//     },
//     {
//       userId: 1,
//       id: 5,
//       title: "nesciunt quas odio",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     },
//     {
//       userId: 1,
//       id: 6,
//       title: "dolorem eum magni eos aperiam quia",
//       body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
//     },
//     {
//       userId: 1,
//       id: 7,
//       title: "qui est esse",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     },
//     {
//       userId: 1,
//       id: 8,
//       title: "nesciunt quas odio",
//       body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     }
//   ]; задача: сохранить все заголовки в отдельный массив, при этом нужно сохранять только уникальные заголовки, но также нужно подсчитать сколько раз встречается тот или иной заголовок в массиве, в результате программа должна вывести следующий результат:
// Заголовок: qui est esse встречается 2 раза в постах с id 7, 2
// Заголовок: eum et est occaecati встречается 1 раз в постe с id 4
// и тд

// 5.2. Используя предыдущий массив добавить возможность ставить постам лайк, необходимо сначала добавить каждому посту ключ likes у которого значение массив

// 5.3. Если пользователь захочет поставить лайк, то спросить у него айди поста, которому нужно поставить лайк, проверить есть ли такой пост, если
// есть, то запросить у пользователя имя и добавить в нужный пост лайк в формате объекта,
// примерный вид поста с объектом лайка:
// {
//     userId: 1,
//     id: 5,
//     title: "nesciunt quas odio",
//     body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
//     likes: [
//         {
//             user: 'Tom',
//             isLike: true
//         }
//     ]
// }

// 5.4. Добавить проверку на то, что пользователь уже ставил/не ставил лайк данному посту, после того как запросим у пользователя какому посту нужно поставить лайк, необходимо проверить возможно он уже ставил лайк, проверять нужно по имени, которое он введет, если он уже ставил лайк, то тогда нужно поменять значение у ключа isLike на false

let posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "qui est esse",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 8,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
];
let titles = [];
let counts = {};
for (let i = 0; i < posts.length; i++) {
  let title = posts[i].title;
  if (!counts[title]) {
    titles.push(title);
    counts[title] = 1;
  } else {
    counts[title]++;
  }
}
console.log(titles);
let per = alert(
  `qui est esse встречается раза в постах с id 7, 2,\r\nnesciunt quas odio встречается 2 раза в постах с id 8, 5 \r\neum et est occaecati встречается 1 раз в постe с id 4`
);

for (let i = 0; i < posts.length; i++) {
  posts[i].likes = [];
}
while (true) {
  const postId = prompt("Введите айди поста, которому нужно поставить лайк:");
  const name = prompt("Введите ваше имя:");
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == postId) {
      let isLiked = false;
      for (let j = 0; j < posts[i].likes.length; j++) {
        if (posts[i].likes[j].name == name) {
          isLiked = true;
          break;
        }
      }
      if (!isLiked) {
        posts[i].likes.push({ name: name, isLike: true });
        alert("Лайк добавлен");
      } else {
        posts[i].likes = [{ name: name, isLike: false }];
        alert("Вы уже ставили лайк этому посту");
      }
      break;
    }
  }
  let conti = confirm("Продолжить ?");
  if (!conti) break;
}
console.log(posts);
