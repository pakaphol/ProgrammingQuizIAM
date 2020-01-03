  const wordset = [ 'VMRCO', 'VORCM', 'MCRTOX', 'ZXTAC', 'XZATC', 'XMTCOR', 'OXVS', 'AZTXC', 'VXOS', 'RZAT', 'MRCOTX', 'SVXO',
      'TRAZ', 'ZTAR', 'MVOCR' ]

  const compare = () => {

    let grouped = []

    wordset.forEach(element =>{ 
        let filted =  wordset.filter(otherElement =>{
            return checkWord(element, otherElement)
        })
        grouped.push(filted)      
    })

      grouped = uniqBy(grouped, JSON.stringify)

      console.log(grouped)

  }

  const checkWord = (wordOne, wordTwo) => {


    if(wordOne.length  === wordTwo.length ){

      wordOne = sortString(wordOne)
      wordTwo = sortString(wordTwo)
        if(wordOne === wordTwo) {
          return wordTwo
      }
    }
  }

  const sortString = (text) => {
    return  text.split('').sort().join('');
  }

  const uniqBy = (a, key)=> {
      var seen = {}
      return a.filter(function(item) {
          var k = key(item)
          return seen.hasOwnProperty(k) ? false : (seen[k] = true)
      })
  }

  compare()