let arr = [1, 2, 4, -1, 6, -1, -1, -1, 3, -1, 5, 8, -1, -1, 7, -1, -1];

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

function bfs(root){
    let q = [];
    q.push(root);
    let s = "";
    while(q.length!=0){
        let front = q.shift();
        s+=front.val+", ";
        if(front.left != null) q.push(front.left);
        if(front.right!=null) q.push(front.right);
    }
    console.log(s);
}

function bfs2(root){
    let q = [];
    q.push(root);
    while(q.length>0){

        let currLevelSize = q.length;
        let s = "";
        while(currLevelSize>0){
            let front = q.shift();
            s+=front.val+", ";
            if(front.left != null) q.push(front.left);
            if(front.right!=null) q.push(front.right);
            currLevelSize--;
        }
        console.log(s);
    }
}


let root = constructTree(arr);
bfs2(root);