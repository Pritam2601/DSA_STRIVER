def trap(heights):
    Lmax = []
    max =-1
    for i in range(len(heights)):
        if heights[i]>max :
            max = heights[i]
        Lmax.append(max) 
    
    max =-1
    print(Lmax)
    for i in range(len(heights)-1,-1,-1):
        Lmax[i]= min(Lmax[i-1],max) 
        if heights[i]>max :
            max = heights[i]
       
    print(Lmax)
    ans =0
    for i in range(1,len(heights)-1):
        stored = Lmax[i] - heights[i] 
        if stored > 0 :
            ans += stored 
    return ans 







print(trap([4,2,0,3,2,5]))
