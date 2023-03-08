function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    
    const sMap = new Map()
    const tMap = new Map()
    
    for (let i = 0; i < s.length; i++) {
        const sLetter = s[i]
        const tLetter = t[i]
        
        sMap.set(sLetter, sMap.get(sLetter) + 1 || 1)
        tMap.set(tLetter, tMap.get(tLetter) + 1 || 1)
    }
    
    for (const [key, value] of sMap){
        if (tMap.get(key) !== value) return false 
    }
    
    return true
};