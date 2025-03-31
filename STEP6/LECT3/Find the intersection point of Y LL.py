class Node:
  def __init__(self, val,next =None):
    self.val=val
    self.next = next 


def display(head):
  while head :
    print(head.val ,end=" -> ")
    head = head.next 
  print(None)
def LL_from_arr(arr , lower , upper  ):
  
  temp = dummyNode= Node(-1)
  for i in range(lower,upper):
    temp.next = Node(arr[i], None )
    temp= temp.next 
  return dummyNode.next  
def merger(h1 ,h2 ):
  t1 = h1 
  if not t1 :
    h1 = h2 
  elif not t1.next :
    t1.next = h2
  else :
    while  t1.next :
      t1=t1.next 
    t1.next = h2 
  return h1 
def getIntersectionNodeBrute(head1,head2):
  mpp= {}
  t1 = head1
  while t1 :
    mpp[t1]=1
    t1=t1.next 
  
  temp2 = head2 
  while temp2 :
    if mpp.get(temp2) == 1  :
      return  temp2.val
    temp2 = temp2.next 
  return None
  #time is m + n and space is m 
def skipCompare(head1,head2,skip):
  t1,t2 = head1,head2
  while skip :
    skip-=1
    t1=t1.next 
  while t2 : 
    if t1 == t2 :
      return t2.val
    t1=t1.next 
    t2=t2.next 
  return None 
def getIntersectionNodeBrute2(head1,head2):
  c1=c2=0
  t1 ,t2= head1 ,head2
  while t1 or t2  : #time is max(m ,n)
    if t1 : 
      c1+=1
      t1=t1.next 
    if t2 : 
      c2+=1
      t2 =t2.next
  
  
  return skipCompare(head1,head2,c1-c2) if c1 > c2 else skipCompare(head2,head1,c2-c1)
  #time is max(m,n) + max(m,n) and space is 1


#EDGE CASE 1 when we have equal length of LL then we  return without playing this waste  [automatically covered ]
#EDGE CASE 2 when we have no INTERSECTION then we will be in loop where when both elements are going to be NONE we are putting them back their counter head
def getIntersectionNodeOptimal(head1,head2):
  t1 ,t2 = head1 , head2 
  while t1 != t2 :
    if not t1.next and not  t2.next  : return None #FOR EDGE CASE 2 
    if not  t1.next : t1 = head2
    else : t1= t1.next 
    if not t2.next : t2=head1
    else : t2= t2.next 
  return t1.val 
#time is m+n and space is 1 


listA =[1,2,3,4]
listB = [11,5,6,7,1,2,3,4]
skipA= 4
skipB = 8
h1 = LL_from_arr(listA , 0 , skipA)
h2= LL_from_arr(listA , skipA, len(listA))
h3=LL_from_arr(listB , 0 , skipB)




common_LL_Node_Val= getIntersectionNodeOptimal(merger(h1,h2),merger(h3,h2))
print(common_LL_Node_Val)

