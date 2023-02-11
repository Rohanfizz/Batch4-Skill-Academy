let arr = [
    1, 2, 4, -1, 10, -1, -1, 5, 9, -1, -1, -1, 3, 6, -1, 8, -1, -1, 7, -1, -1,
];

class Node {
    val;
    left;
    right;
    constructor(v) {
        this.val = v;
    }
}

function constructTree(arr) {
    let idx = 0;

    function createTree() {
        if (idx == arr.length) return null;
        if (arr[idx] == -1) {
            idx++;
            return null;
        }

        let me = new Node(arr[idx]);
        idx++;
        let getMyLeft = createTree();
        let getMyRight = createTree();
        me.left = getMyLeft;
        me.right = getMyRight;
        return me;
    }
    return createTree();
}

function displayTree(root) {
    if (root == null) return;
    let s = "";
    s += root.val + ": ";

    if (root.left == null) s += "-1, ";
    else s += root.left.val + ", ";

    if (root.right == null) s += "-1";
    else s += root.right.val;
    console.log(s);

    displayTree(root.left);
    displayTree(root.right);
}

function verticalOrderTraversal(root) {
    let hm = {};
    let q = [];
    q.push([root, 0]);
    let miniRod = 1000;
    let maxiRod = -1000;
    while (q.length > 0) {
        let front = q.shift();
        let currNode = front[0];
        let rodNumber = front[1];
        if (rodNumber in hm) {
            hm[rodNumber].push(currNode.val);
        } else {
            hm[rodNumber] = [currNode.val];
        }
        miniRod = Math.min(miniRod, rodNumber);
        maxiRod = Math.max(maxiRod, rodNumber);
        if (currNode.left != null) q.push([currNode.left, rodNumber - 1]);
        if (currNode.right != null) q.push([currNode.right, rodNumber + 1]);
    }
    console.log(hm);
    let s = "";
    for (let i = miniRod; i <= maxiRod; i++) {
        for (let j = 0; j < hm[i].length; j++) s += hm[i][j] + ", ";
    }
    console.log(s);
}

let root = constructTree(arr);
verticalOrderTraversal(root);
