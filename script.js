const arr = [4, 3, 2, 1];
const n = 4 ; 

const divide = (arr, n) => {
	let subArray = []; 
	arr.map((element, index)=>{
		if(element <= n ){
		subArray = arr.slice(1 ,n  )
		} else{
			index++ ; 
		}
			return subArray ; 
	})

		return subArray ; 

}



	
// let trackingSum =0, ans = [] , subArr= [];
// 	for(lt i = 0; i <arr.length; i++){
// 		if(trackingSum + arr[i] <= n){
// 		subArr.push(arr[i]);
// 		trackingSum += arr[i];
// 	}
// 		else{
// 			ans.push(subArr);
// 			subArr = [arr[i]];
// 			trackingSum += arr[i];
// 		}
// 	}
// 		ans.push(subArr);
// 		return ans;
	
// };

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
