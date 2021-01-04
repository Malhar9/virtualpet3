class Food
{
    constructor()
    {
        this.foodStock;
        this.fedTime;
        this.image = loadImage("images/Milk.png");
    }
    getFoodStock()
    {
        return this.foodStock;
    }
    updateFoodStock(foodStock)
    {
        this.foodStock = foodStock;
    }
    deductFoodStock()
    {
        if(this.foodStock > 0)
        {
            this.foodStock = this.foodStock-1;
        }
    }
    getFedTime(fedTime)
    {
        this.fedTime = fedTime;
    }
    bedroom(){
        background(bedroom,550,500);  
    }
      
    garden(){
        background(garden,550,500);  
    } 

    washroom(){
        background(washroom,550,500); 
    }
}

    display()
    {
        if(fedTime>=12){
            textSize(20);
              text("Last Feed : "+ fedTime%12 + " PM", 400,50);
          }else if(fedTime==0){
            textSize(20);
              text("Last Feed : 12 AM",400,50);
          }else{
            textSize(20);
              text("Last Feed : "+ fedTime + " AM", 400,50);
          }
        var x =80;
        var y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(this.foodStock!=0)
        {
            for(var i = 0;i<this.foodStock;i++)
            {
                if(i%10 == 0)
                {
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

    }
