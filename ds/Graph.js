const HashTable = require('./HashTableLL');

module.exports = class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }

  removeVertex(node) {
    if (this.adjacentList[node]) {
      for (v in this.adjacentList[node]) {
        if (this.adjacentList[v]) {
          this.removeEdge(node, v);
        }
      }
      delete this.adjacentList[node];
    }  
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1]) {
      this.addVertex(node1);
    }
    if (!this.adjacentList[node2]) {
      this.addVertex(node2);
    }
    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }

  removeEdge(node1, node2) {
    if (this.adjacentList[node1] && this.adjacentList[node2]) {
      this.adjacentList[node1] = this.adjacentList[node1].filter(v => v !== node2);
      this.adjacentList[node2] = this.adjacentList[node2].filter(v => v !== node1);
    }  
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}