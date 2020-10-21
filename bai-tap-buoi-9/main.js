// Hàm kiểm tra số nguyên
function checkNumber(number) {
    if (parseInt(number)==number) {
        return true;
    }
    else {
        return false;
    }
}
// Bài 1:
const realSalary = (money) => {
    if (money >= 15000000) {
        console.log('Thuế thu nhập: ' + money*0.3)
        console.log('Lương ròng: '+money*0.7)
    } else if (money >= 7000000 && money < 15000000) {
        console.log('Thuế thu nhập: ' + money*0.2)
        console.log('Lương ròng: '+money*0.8)
    } else if (money >= 0 && money < 7000000) {
        console.log('Thuế thu nhập: ' + money*0.1)
        console.log('Lương ròng: '+money*0.9)
    } else {
        console.log('Nhập đúng tiền lương')
    }
}

// Bài 2:
const ageSchool = (age) => {
    if (checkNumber(age) && age >= 16) {
        console.log('Bạn đã đủ tuổi vào lớp 10')
    } else if(checkNumber(age) && age<16) {
        console.log('Bạn chưa đủ tuổi vào lớp 10')
    } else{
        console.log('Mời bạn nhập số nguyên')
    }
}
// Bài 3:
const equalsNumber = (number) => {
    if(checkNumber(number) && number>100) {
        console.log('Số '+number+' lớn hơn 100')
    } else if(parseInt(number)==number && number==100) {
        console.log('Hai số bằng nhau')
    } else if(parseInt(number)==number && number<100) {
        console.log('Số '+number+' nhỏ hơn 100')
    } else {
        console.log('Mời bạn nhập số nguyên')
    }
}

// Bài 4: 
const findMax = (a ,b ,c ) =>{
    var flag=0
    var max
    if(checkNumber(a)&& checkNumber(b) && checkNumber(c)){
        flag = 1;
        max =a;
    } else {
        console.log('Hãy nhập số nguyên')
    }
    if (b > max) {
        max = b
    } if (c > max ) {
        max = c
    } if (flag == 1) {
        console.log('Số lớn nhất là: ' + max)
    }
}

// Bài 5: 
const rankStudent = (point) => {
    if(point >=9 && point <=10) {
        console.log('Xếp hạng A')
    } else if(point >=7 && point <9) {
        console.log('Xếp hạng B')
    } else if(point >=5 && point<7) {
        console.log('Xếp hạng C')
    } else if(point <5 && point >=0) {
        console.log('Xếp hạng F')
    } else {
        console.log('Mời bạn nhập số trong khoảng {0-10}')
    }
}

// Bài 6:
const solveEquation = (a,b,c) => {
    var delta=b*b-4*a*c
    if (a==0 && b==0) {
        console.log('Phương trình vô nghiệm')
    } else if (a==0) {
        console.log('Phương trình có 1 nghiệm x = '+(-c/b))
    } else if (delta < 0) {
        console.log('Phương trình vô nghiệm')
    } else if (delta > 0) {
        console.log('Phương trình có 2 nghiệm phân biệt:x1='+(-b+Math.sqrt(delta))/(2*a) + ' và ' + (-b-Math.sqrt(delta))/(2*a))
    } else if (delta ==0) {
        console.log('Phương trình có nghiệm kép x='+ (-b/2*a))
    } else {
        console.log('Hãy nhập số')
    }
}

// Bài 7:
const shareProfit = (money) => {
    if (money <= 100000000) {
        console.log('Tiền hoa hồng:'+ money*0.05)
    }
    else if (money <= 300000000 && money > 100000000) {
        console.log('Tiền hoa hồng:'+ money*0.1)
    }
    else if (money >= 300000000) {
        console.log('Tiền hoa hồng:'+ money*0.2)
    }
    else {
        console.log('Nhập đúng số tiền')
    }
}

// Bài 8:
const telephoneFee = (time) => {
    const fee = 25000
    var money = 0
    if (time <= 50) {
        money = fee + time*600
    }
    if (time >50 && time <=200) {
        money = fee + (50*600) + (time-50)*400
    }
    if (time > 200) {
        money = fee + (50*600) + (150*400) +  (time-200)*200
    }
    console.log('Tiền điện thoại: ' + money)
}
