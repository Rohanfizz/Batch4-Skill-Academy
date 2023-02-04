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

// let tree = [1,3,4,-1,-1,2,8,-1,-1,-1,5,6,-1,9,-1,-1,7,-1,-1];
let tree = [1, 2, 4, -1, 5, -1, -1, -1, 3, 6, -1, -1, 7, -1, -1];
let root = serialize(tree);

let preorder = "";
let inorder = "";
let postorder = "";

function traversal(node) {
    if(node == null) return;
    preorder+= node.val+" ";
    traversal(node.left);
    inorder+= node.val+" ";
    traversal(node.right);
    postorder+= node.val+" ";
}

// traversal(root);

// console.log("Preorder:",preorder);
// console.log("Inorder:",inorder);
// console.log("Postorder:",postorder);



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

function sizeOfTheTree(node){
    if(node == null) return 0;
    let leftSize = sizeOfTheTree(node.left);
    let rightSize = sizeOfTheTree(node.right);

    return leftSize + 1 + rightSize;
}
function heightOfTheTree(node){
    if(node == null) return 0;
    let leftHeight = heightOfTheTree(node.left);
    let rightHeight = heightOfTheTree(node.right);
    return Math.max(leftHeight,rightHeight)+1;
}
// console.log(heightOfTheTree(root));
// console.log(sizeOfTheTree(root));
// displayTree(root);

function bfs(node){
    let q=[];
    q.push(node);

    while(q.length>0){
        let front = q.shift();
        console.log(front.val);

        if(front.left != null) q.push(front.left);
        if(front.right != null) q.push(front.right);
    }
}

bfs(root);