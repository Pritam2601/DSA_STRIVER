

def divideList(head):
    # Write your code here.
    # 1 
    head1 = head
    head2=head.next 
    if not  head2 :
        return None 
    temp = head.next.next
    count=2
    while temp :
        count=count+1
        if count%2==1:
            head1.next = temp 
        else :
            head2.next = temp 
        temp = temp.next 
    return [head1,head2]
