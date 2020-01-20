module.exports = isMutant = function(dna) {
	let len = dna.length
	let total = 0
	let index = 0

	let counterH = 0
	let counterV = 0
	let countersR = Array(len).fill(1)
	let countersL = Array(len).fill(1)

	let letterH = ""
	let letterV = ""
	let lettersR = Array(len).fill("")
	let lettersL = Array(len).fill("")

    
    for (var i = 0; i < len; i++) {
    	for (var j = 0; j < len; j++) {

    		//Find Horizontal
	    	if (dna[i][j] == letterH) {
	    		counterH++
	    	} else {
	    		letterH = dna[i][j]
	    		counterH = 1
	    	}

	    	if (counterH == 4) {
	    		counterH = 0
	    		letterH = ""
	    		total++
	    	}


	    	//Find Vertical
	    	if (dna[j][i] == letterV) {
	    		counterV++
	    	} else {
	    		letterV = dna[j][i]
	    		counterV = 1
	    	}

	    	if (counterV == 4) {
	    		counterV = 0
	    		letterV = ""
	    		total++
	    	}


	    	//Find Oblique Right
	    	if (j + index == len) {
	    		lettersR[j] = ""
	    		countersR[j] = 0
	    	}

	    	if (dna[i][(j + index) % len] == lettersR[j]) {
	    		countersR[j]++
	    	} else {
	    		lettersR[j] = dna[i][(j + index) % len]
	    		countersR[j] = 1
	    	}

	    	if (countersR[j] == 4) {
	    		countersR[j] = 0
	    		lettersR[j] = ""
	    		total++
	    	}


	    	//Find Oblique Left
	    	if (j + index == len) {
	    		lettersL[j] = ""
	    		countersL[j] = 0
	    	}

	    	if (dna[len - 1 - i][(j + index) % len] == lettersL[j]) {
	    		countersL[j]++
	    	} else {
	    		lettersL[j] = dna[len - 1 - i][(j + index) % len]
	    		countersL[j] = 1
	    	}

	    	if (countersL[j] == 4) {
	    		countersL[j] = 0
	    		lettersL[j] = ""
	    		total++
	    	}


	    	if (total >= 2) {
	    		return true
	    	}
	    }

	    counterH = 0
	    counterV = 0
	    letterH = ""
	    letterV = ""
	    index++
    }

	return false
}
