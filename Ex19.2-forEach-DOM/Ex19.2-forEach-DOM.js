const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

//1
const div = document.createElement("div");
document.body.appendChild(div);
const ol = document.createElement("ol");
div.appendChild(ol);

users.forEach((user) => {
  const li = document.createElement("li");
  const textList = document.createTextNode(`${user.firstName} ${user.lastName}`);
  li.appendChild(textList);
  ol.appendChild(li);
});

//2
ol.style.listStyleType = "none";

//3

users.forEach((user, idx) => {
  ol.children[idx].setAttribute("data-id", user.id);
});

//another solution..
// ol.children[0].setAttribute("data-id", users[0].id);
// ol.children[1].setAttribute("data-id", users[1].id);
// ol.children[2].setAttribute("data-id", users[2].id);
