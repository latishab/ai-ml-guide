const corpus_of_documents = [
    "Places to find whale shark are Maldives, Cebu, and Alor",
    "Places to find humpback whales are in French Polynesia",
    "Diving is one of the most calming yet dangerous sport",
    "In order to dive, you need to get Open Water Diver Certification",
    "To get open water diver certification, you need to go through confined pool sessions, theory classes, and 4 open water dives",
    "The limit of how deep you can go as an open water diver is 18 meters"
];

// finding a similarity between two sets (jaccard similarity)
function jaccard_similarity(query, document) {
    const querySet = new Set(query.toLowerCase().split(" "));
    const documentSet = new Set(document.toLowerCase().split(" "));

    const intersection = new Set([...querySet].filter(x => documentSet.has(x)));
    const union = new Set([...querySet, ...documentSet]);

    return intersection.size / union.size;
}

function returnResponse(query, corpus) {
    const similarities = corpus.map(doc => jaccard_similarity(query, doc)); // create an array of similarities
    const maxSimilarityIndex = similarities.indexOf(Math.max(...similarities)); // basically returning max similarity for the "best" one
    return corpus[maxSimilarityIndex];
}

const userInput = "Where can i see humpback whales?";
const response = returnResponse(userInput, corpus_of_documents);
console.log(response);
