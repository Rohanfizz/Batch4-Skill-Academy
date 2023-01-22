// let tree = [20, 8, 4, -1, -1, 12, 10, -1, -1, 14, -1, -1, -1];
class Node {
    left;
    right;
    val;
    constructor(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

function serialize(tree) {
    let idx = 0;
    function solve(tree) {
        if (idx == tree.length) return null;
        if (tree[idx] == -1) {
            idx++;
            return null;
        }
        let nn = new Node(tree[idx]);
        idx++;
        nn.left = solve(tree);
        nn.right = solve(tree);
        return nn;
    }

    let root = solve(tree);
    return root;
}

let tree = [1,3,4,-1,-1,2,8,-1,-1,-1,5,6,-1,9,-1,-1,7,-1,-1];
let root = serialize(tree);
let preOrder ="";
let inOrder = "";
let postOrder = "";
function traversal(node){
    if(node == null) return;
    preOrder += node.val +" ";
    traversal(node.left);   ///////////////////// left
    inOrder += node.val + " ";
    traversal(node.right);  //////////////////// right
    postOrder+=node.val + " ";
}
traversal(root);
console.log(preOrder);
console.log(inOrder);
console.log(postOrder);