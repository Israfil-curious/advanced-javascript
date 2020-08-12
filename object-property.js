const friends = [
        { name: "Sophia", id: 787845, phone: 675867 },
        { name: "Dianna", id: 785768, phone: 784575 },
        { name: "Alyssa", id: 675875, phone: 765876 }
    ]
    // const friendsName = [];
    // for (let i = 0; i < friends.length; i++) {
    //     let element = friends[i];
    //     let names = element.name;
    //     friendsName.push(names);
    // }
    // console.log(friendsName);

const result = friends.map(s => s.name);
console.log(result);