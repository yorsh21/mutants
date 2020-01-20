module.exports = isMutant = function(dna) {
	let len = dna.length
	let total = index = counterH = counterV = 0
	let letterH = letterV = ""

	let countersR = Array(len).fill(1)
	let countersL = [...countersR]

	let lettersR = Array(len).fill("")
	let lettersL = [...lettersR]


    for (var i = 0; i < len; i++) {
    	for (var j = 0; j < len; j++) {

    		//Find Horizontal
	    	if (dna[i][j] == letterH) {
	    		if (++counterH == 4) {
	    			if (++total == 2) {
	    				return true
	    			}

	    			counterH = 0
	    			letterH = ""
	    		}
	    	} else {
	    		letterH = dna[i][j]
	    		counterH = 1
	    	}


	    	//Find Vertical
	    	if (dna[j][i] == letterV) {
	    		if (++counterV == 4) {
	    			if (++total == 2) {
	    				return true
	    			}
	    			
	    			counterV = 0
	    			letterV = ""
	    		}
	    	} else {
	    		letterV = dna[j][i]
	    		counterV = 1
	    	}


	    	//Find Oblique Right
	    	if (j + index == len) {
	    		lettersR[j] = ""
	    		countersR[j] = 0
	    	}

	    	if (dna[i][(j + index) % len] == lettersR[j]) {
	    		if (++countersR[j] == 4) {
	    			if (++total == 2) {
	    				return true
	    			}

	    			countersR[j] = 0
	    			lettersR[j] = ""
	    		}
	    	} else {
	    		lettersR[j] = dna[i][(j + index) % len]
	    		countersR[j] = 1
	    	}

	    	
	    	//Find Oblique Left
	    	if (j + index == len) {
	    		lettersL[j] = ""
	    		countersL[j] = 0
	    	}

	    	if (dna[len - 1 - i][(j + index) % len] == lettersL[j]) {
	    		if (++countersL[j] == 4) {
	    			if (++total == 2) {
	    				return true
	    			}

	    			countersL[j] = 0
	    			lettersL[j] = ""
	    		}
	    	} else {
	    		lettersL[j] = dna[len - 1 - i][(j + index) % len]
	    		countersL[j] = 1
	    	}
	    }

	    counterH = counterV = 0
	    letterH = letterV = ""
	    index++
    }

	return false
}
