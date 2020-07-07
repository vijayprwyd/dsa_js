const PriorityQueue = require('../PriorityQueue/PriorityQueue');

function Graph(nodes) {

    this.nodes = [];
    for(let i = 0; i < nodes; i++) {
        this.nodes[i] = {
            edges: []
        }
    }
}

Graph.prototype.addDirectedEdge = function(src, dest, weight) {

    this.nodes[src].edges.push({
        node: dest,
        weight
    });
}

Graph.prototype.singleSourceShortestPathWithDepthK = function(src, dest, K) {

    let pq = new PriorityQueue([], (edge1, edge2) => edge1.distance > edge2.distance);

    pq.add({
        node: src,
        distance: 0,
        currentDepth: 0
    });

    while(!pq.isEmpty()) {
        let minNode = pq.remove();

        if(minNode.node === dest) {
            return minNode.distance;
        }

        for(let edge of this.nodes[minNode.node].edges) {

            if(minNode.currentDepth <= K) {

                pq.add({
                    node: edge.node,
                    distance: minNode.distance + edge.weight,
                    currentDepth: minNode.currentDepth + 1
                });
            }
        }
    }
    return -1;
};
