// let inOrder  = [1,2,3,4,5,6];
// let preOrder = [4,2,1,3,6,5];

// function reconstructTree(inOrder, preOrder) {
//   let result = [];
//   let root = preOrder[0];

//   function build() {

//     preOrder.forEach((e,i,arr)=> {

//       if (e === root) {
//         result.push(root, [], []);
//       }

//       if (e < root) {
//         result[1].push(e, [], []);
//       }

//       if (e > root) {
//         result[2].push(e, [], []);
//       }
//     });
//   }  
    

//   console.log(result);
// }

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}














reconstructTree(inOrder,preOrder);



[ 
  4, 
  [ 
    2, 
    [ 1 , [], [] ],
    [ 3 , [], [] ]
  ],
  [ 
    6,
    [ 5 , [], [] ],
    []
  ]
]