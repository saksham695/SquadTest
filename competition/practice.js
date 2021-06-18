const user = {
  name: "John",
  age: 22,
  hobby: {
    reading: true,
    gaming: {
      laptopGames: {
        COD: true,
      },
      mobileGames: {
        pubG: true,
      },
    },
    sport: {
      indoorSports: {
        cricket: true,
        football: true,
      },
      outdoorSports: {
        chess: true,
        ludo: false,
      },
    },
  },
};

let transformedObject = {};

const flattenComplicatedObject = (obj, parentKey) => {
  for (let key in obj) {
    const currentKey = parentKey + "_" + key;
    if (typeof obj[key] === "object") {
      flattenComplicatedObject(obj[key], currentKey);
    } else {
      transformedObject[currentKey] = obj[key];
    }
  }
};

const commentData = [
  {
    comment: "a",
    children: [
      {
        comment: "aa",
        children: [
          {
            comment: "aaa",
            children: [
              {
                comment: "aaaa",
                children: [{ comment: "aaaa", children: [] }],
              },
            ],
          },
        ],
      },
      {
        comment: "aa2",
        children: [
          {
            comment: "aaa2",
            children: [
              {
                comment: "aaaa2",
                children: [{ comment: "aaaa2", children: [] }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    comment: "b",
    children: [
      {
        comment: "bb",
        children: [
          {
            comment: "bbb",
            children: [
              {
                comment: "bbbb",
                children: [{ comment: "bbbbb", children: [] }],
              },
            ],
          },
        ],
      },
    ],
  },
];

const iterateComment = (data = [], parentIndex = 0) => {
  data.map(({ comment, children }, index) => {
    const position = "-".repeat(parentIndex + 1);
    console.log(``, position, comment);
    !!children && iterateComment(children, parentIndex + index + 1);
  });
};
iterateComment(commentData, 0, 0);
