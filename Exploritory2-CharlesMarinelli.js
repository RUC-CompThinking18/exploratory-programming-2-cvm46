Array.prototype.isArray=true; //this apparently sets up the .isArray identifier

function ArrayChecker(list){
  if (list.isArray){
    positives=[];
    for item in list{
      if item > 0
      positives.append(item)
    }
    return len(positives)//this allows to return the amount of positive items within the list
  }
  else{
    throw "THIS ISN'T AN ARRAY!" //it's in all caps for emphasis
  }


x=[1,2,3]
y="1,2,3"
ArrayChecker(x)
ArrayChecker(y)
