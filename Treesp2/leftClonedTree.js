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

let tree = [1,2,4,-1,-1,-1,3,-1,5,-1,-1];
let root = serialize(tree);
function displayTree(node){
    if(node == null) return;

    let myAns = node.val+": ";
    if(node.left != null) myAns+=node.left.val+", ";
    else myAns+=-1+", ";

    if(node.right != null) myAns+=node.right.val;
    else myAns+=-1;

    console.log(myAns);
    displayTree(node.left);
    displayTree(node.right);
}

function solve(node){
    if(node == null) return null;
    let newLeft = solve(node.left);
    let newRight = solve(node.right);
    let cloneNode= new Node(node.val);
    node.left = cloneNode;
    cloneNode.left = newLeft;
    node.right = newRight;
    return node;
}


root = solve(root);
displayTree(root);