var closedOpenPair = map[rune]rune{
        ')': '(', 
        ']': '[', 
        '}': '{',
    }

type stack struct {
    data []rune
}

func (s *stack) Add(b rune) {
    s.data = append(s.data, b)
}

func (s *stack) Pop() rune {
    if len(s.data) == 0 {
        return 0
    }
    val := s.data[len(s.data) - 1]
    s.data = s.data[:len(s.data) - 1]
    return val
}

func assertLastOpening(lastOpening rune, currentClosing rune) bool {
    if lastOpening == 0 {
        return false
    }
    
    // get the opening bracket we would want given the current closing one
    // if want does not match the last one we saw, return false
    if want, _ := closedOpenPair[currentClosing]; want != lastOpening {
        return false
    }
    
    return true
}

func isValid(s string) bool {
    if len(s) < 2 {
        return false
    }
    
    
    seen := &stack{}

    for _, bracket  := range s {        
        switch bracket {
            // if opening just push onto stack
            case '(', '[', '{':
                seen.Add(bracket)
            // else check if the last opening
            // bracket matches the current closing one
            // if so, remove the last open one from the
            // stack and continue
            // else return false due to missmatch
            default:
                lastOpening := seen.Pop()
                if !assertLastOpening(lastOpening, bracket) {
                    return false
                }
        }
    }
    
    // stack must be empty
    // else we've seen more opening than closing brackets
    if len(seen.data) != 0 {
        return false
    }
    return true
}