class Node :
  def __init__(self,val, next=None  ):
    self.val = val 
    self.next = next 


def display(head):
  while head :
    print(head.val ,end=" -> ")
    head = head.next 
  print(None)
def LL_from_arr(arr):
  if len(arr)==0 :
    return None 
  head = Node(arr[0])
  temp=head 
  for i in range(1,len(arr)):
    temp.next = Node(arr[i], None )
    temp= temp.next 
  return head 

def addTwoNumbersBetter(l1,l2):
  temp1= l1 
  temp2 = l2
  carry =0
  dummyNode  = Node(0) 
  temp3 = dummyNode 
  while temp1 and temp2:
    sum = temp1.val+temp2.val + carry 
    carry =  sum//10
    temp3.next = Node(sum % 10)
    temp3 = temp3.next 
    temp1=temp1.next 
    temp2=temp2.next 
  
  while temp1 :
    sum = carry + temp1.val 
    carry =  sum//10
    temp3.next = Node(sum % 10)
    temp3=temp3.next 
    temp1=temp1.next 

  
  while temp2 :
    sum = carry + temp2.val 
    carry = sum//10
    temp3.next =Node(sum % 10)
    temp3=temp3.next 
    temp2=temp2.next 

  
  if carry :
    temp3.next = Node(carry)

  return dummyNode.next 
#time is max(l1.length , l2.length ) and space is max(l1.length , l2.length )


def addTwoNumbersOptimal(l1,l2):
  temp1 = l1
  temp2=l2
  carry =0
  l1_smaller = False 
  p1=None 
  p2=None 
  while temp1 or temp2 :
    if not temp1 :
      print("called")
      l1_smaller = True 
    sum = carry 
    if temp1 :
      sum +=temp1.val 
    if temp2 :
      sum += temp2.val
    unit = sum %10 
    carry = sum //10
    if temp1 :
      p1=temp1
      temp1.val = unit 
      temp1=temp1.next 
      if not carry and not temp2:
        return l1  
    if temp2 :
      p2=temp2
      temp2.val = unit 
      temp2=temp2.next 
      if not carry and l1_smaller :
        return  l2 


   

  
  if carry  :
    if l1_smaller :
      p2.next =Node(carry) 
      return l2
    else :
      p1.next =Node(carry) 
      return l1
  else : 
    if l1_smaller :
      return l2 
    else :
      return l1 

 
  #time is max(l1.length , l2.length) and space is 1 

arr1 = [9,9,9,9,9,9,9]
arr2 = [9,9,9,9]
l1,l2 = LL_from_arr(arr1),LL_from_arr(arr2)
display(l1)
display(l2)
h= addTwoNumbersOptimal(l1,l2)
display(h)


#0 7 0 8 