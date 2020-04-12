
		//変数
		var DebugButton = null;//開発者モードの有効/無効判定

		var PT = 3; //問題パターン

		var a = null;//数値(優先)
		var b = null;//数値(優先)
		var c = null;//数値(優先)

		var a2 = null;//数値
		var a3 = null;//数値
		var a4 = null;
		var b2 = null;//数値
		var b3 = null;//数値
		var b4 = null;

		var rootA = null;//根号のついた数値
		var rootB = null;//根号のついた数値

		var n = 2//計算用の数値
		var i = 2//計算用の数値

		var array1 = [];//素因数分解の結果を代入する変数
		var list1 = [];//素数の重複を代入する変数

		var Count = null;//数値のカウント
		var Count2 = null;

		var test = null;//Debug用
		var debug_soinsu = [];//素数Debug用

		var Q = null;//問題
		var A1 = null;//解答
		var A2 = null;//ユーザーから入力された解答

		var btn = null;//フォームのボタン

		var result = null;//結果1
		var result2 = null;//結果2


		//問題を選択
		PT = Math.floor(Math.random() * 2) + 2;

		//√a => a√b
		if (PT == 1) {

		roota();
		ab();

		//答えを作成
		//aもbも存在する時の処理(a√b)
		if(a != null && b != null){

			A1 = a + "√" + b;
		}

		//aが存在しない時の処理(√a)
		if(a == null){

			A1 = "√" + b;
		}

		//bが存在しない時の処理(根号がはずれる)
		if(b == null) {
			A1 = a;
		}

		//問題を作成
		Q = "√" + c;

		//問題を出題
		document.write(Q + "を簡単にしなさい。<BR>簡単にできない場合はそのまま記入しなさい。<BR>");

		ACheck();
	}

	//√a + √a
	if(PT == 2){

		Count = 1;
		Q = "";

		while(Count <= 2){

			PT2();
 		}

 		//同類項をまとめられない時は
 		//b2とb3が一致しない, b2が空ではないかつb3が空, b2が空かつb3が空ではない
		//while((b2 != b3) || (b2 != "" && b3 == "") || (b2 == "" && b3 != "")){
		while(b2 != b3){

			//変数リセット
			Count = 1;
			a = "";
			b ="";
			a2 = "";
			a3 = "";
			b2 = "";
			b3 = "";
			A1 = "";
			Q = "";

			reset()

			PT2();
		}

		//document.write("b2 == ",b2,"<BR>","b3 == ",b3,"<BR>");
 		if(b2 == b3){

			//まとめられる場合に限り、答えを作成
 			//document.write("a2 ",a2,"<BR>a3 ",a3,"<BR>");

 			//a√b + √b のときはaを1加算する。
			if(a2 == "" && a3 != "")
			{
				a = a2 + a3;
				a++;
			}

			if(a2 != "" && a3 == "")
			{
				a = a2 + a3; 
				a++;
			}
			
			if(a2 == "" && a3 == "")
			{
				a = a2 + a3; 
				a++; 
				a++;
			}

			//a√b + c√b のときはなにもしない
			if(a2 != "" && a3 != "")
			{
				a = a2 + a3;
			}

			b = b2

			//aもbも存在する時の処理(a√b)
			if(a != "" && b != ""){

				A1 += a + "√" + b;

			}

			//aが存在しない時の処理(√a+)
			if(a == "" && b != ""){

				A1 += "√" + b;
			}

			//bが存在しない時の処理(根号がはずれる+)
			if(b == "" && a != ""){

				A1 += a;				
			}

			//答え作成終わり

			//Q = √c+√c+ の状態なので、最後の符号を消す
			Q = Q.slice(0, -1);

		}

		//問題を出題
		document.write(Q + "を計算しなさい。<BR><BR>");
			
		ACheck();
	}

	//√a - √a
	if(PT == 3){

		Count = 1;
		Q = "";

			while(Count <= 2){

				PT3();

 			}

 			//同類項をまとめられない時は
 			//b2とb3が一致しない, b2が空ではないかつb3が空, b2が空かつb3が空ではない
			//while((b2 != b3) || (b2 != "" && b3 == "") || (b2 == "" && b3 != "")){
			while(b2 != b3){

				//変数リセット
				Count = 1;
				a = "";
				b ="";
				a2 = "";
				a3 = "";
				b2 = "";
				b3 = "";
				A1 = "";
				Q = "";

				reset()

				PT3();
			}

 			if(b2 == b3){

				//まとめられる場合に限り、答えを作成
 				//a√b - √b のときは減算して符号を決める
				if(a2 == "" && a3 != "")
				{
					a = a2 - a3; 
					a++;
				}
				
				if(a2 != "" && a3 == "")
				{
					a = a2 - a3; 
					a-=1;
				}

				//√a - √aのとき
				if(a2 == "" && a3 == "")
					{
						a = a2 - a3;
					}

				//a√b - c√b のときはなにもしない
				if(a2 != "" && a3 != "")
				{
					a = a2 - a3
				}

				b = b2

				//aもbも存在する時の処理(a√b)
				if(a != "" && b != ""){

					A1 += a + "√" + b;

					//1√bを回避
					if(a == 1){

						A1 ="√" + b;
					}

					//-1√aを回避
					if(a == -1){

						A1 = A1.slice(2);
						A1 = "-" + A1;
					}
				}

				//aが存在しない時の処理(√a)
				if(a == "" && b != ""){

					A1 += "√" + b;
				}

				//bが存在しない時の処理(根号がはずれる)
				if(b == "" && a != ""){

					A1 = a;				
				}

				//0√b はそもそも無いので、0
				if(a == 0){

						A1 = 0;
					}

				//答え作成終わり
				//Q = √c+√c+ の状態なので、最後の符号を消す
				Q = Q.slice(0, -1);
			}

			//問題を出題
			document.write(Q + "を計算しなさい。<BR><BR>");
			
			ACheck();
	}

	//√a + √a + √a
	if(PT == 4){

		Count = 1;
		Q = "";

			while(Count <= 2){

				PT4();
 			}

 		//同類項をまとめられない時
			while(b2 != b3 != b4){
				//変数リセット
				Count = 1;
				a = "";
				b ="";
				a2 = "";
				a3 = "";
				b2 = "";
				b3 = "";
				A1 = "";
				Q = "";

				reset()

				PT4();
			}
	}
		//a√bにする関数
		function ab(){

			//素因数分解	
			n = a;
			i = 2;

			while (i <= n) {
				while (n % i == 0) {
					//素数を代入
					array1.push(i);

					//素数を代入(Debug)
					debug_soinsu.push(i);
					n = Math.floor(n/i);
				}
					
				i = i+1; 
			}
			
			//document.write("this is list1", list1,"<BR>");
			//document.write("array1 :", array1,"<BR>n :",n,"<BR>");

			//重複した数値をそのまま代入
			list1 = array1.filter(function (x, i, self) {

            return self.indexOf(x) !== self.lastIndexOf(x);
       		}

       		);

			//各数値の重複を数える
       		var counts = {};
       		test = 0;

			for(var i=0;i< list1.length;i++){

 				var key = list1[i];
  				counts[key] = (counts[key])? counts[key] + 1 : 1 ;
			}

			for (var key in counts){

				//重複の数が奇数の場合、list1から数値を1つ削除する。
				if((counts[key] % 2) != 0 && counts[key] > 0) {

					//削除する値を代入
					var val = Number(key);

					//検索
					var idx = list1.indexOf(val);
					
					//削除
					list1.splice(idx,1)
				}
			}

			//変数をリセット
			counts = {};

			//重複を再度カウント
			for(var i=0;i< list1.length;i++){

 				key = list1[i];
  				counts[key] = (counts[key])? counts[key] + 1 : 1 ;
  			}

			for (var key in counts){

				//list1とarray1を比較し, 重複する分をarray1から削除
					
				var val = Number(key);

				var idx = array1.indexOf(val);

				array1.splice(idx,counts[key]);

				//document.write("素因数分解:	  ", array1,"<BR>");
					
				//list1の数値を半分にする
				i = 1;
				Count2 = 0;

				//iがcounts[key]の半分になるまで削除する
				while(counts[key]/i >= 2){

					test++;
					i ++;
					Count2 ++

					var val = Number(key);

					var idx = list1.indexOf(val);
						
					list1.splice(idx,1)
				}
			}

			Count2 = 0;

			//list1の配列の積を求める
			if(list1.length >= 1){
				result = list1.reduce(function (previous, current, index, array) {
   				return previous * current;
				});
			}

			//arrasy1の配列の積を求める
			if(array1.length >= 1){
				result2 = array1.reduce(function (previous, current, index, array) {
   				return previous * current;
				});
			}

			//結果をaに代入する。この時、もとのaはbに代入される。
			a = result2;//array1の積
			b = a;
			a = result;//list1の積

			//ここまでa√bにする処理
		}

		//aに乱数を代入し、根号をつける関数
		function roota(){

			a = 1;
			//a=1を避けるため、a=1のときループ
			while(a == 1){

				//乱数設定
				a = Math.floor(Math.random() * 30) + 1; //乱数
			}

			//a = 9;

			c = a;//a√bにする前のaを保存するため、cにaを代入
			rootA = "√" + a; //根号をつける
		}

		//正解判定の関数
		function ACheck(){

			//正解判定
			//ボタン入力判定
			document.getElementById("button").onclick = function(){

				//解答入力をA2に代入
				A2 = document.getElementById("A").value;
				//document.write(A1, "<BR>");

				if(A1 == A2){

					//document.write("正解！<BR>");
					document.getElementById("form-text").innerHTML = "正解！<BR><BR><BR>" + '<input type="button" value="Next" onclick="window.location.reload();" />';


				}else{

					document.getElementById("form-text").innerHTML = "不正解...<BR><BR><BR>正解: " + A1 + '<BR><input type="button" value="Next" onclick="window.location.reload();" />';
				}
			}
		}

		//PT2計算用
		function PT2(){

			while(Count <= 2){

			roota();
			ab();
				
				//1回目の結果のaをa2に、bをb2に代入
				if(Count == 1){

					a2 = a;
					b2 = b;
				}

				//2回目の結果のaをa3に、bをb3に代入
				if(Count == 2){

					a3 = a;
					b3 = b;
				}

				//問題を作成 √c + をQに加算
				Q += "√" + c + "+";

				Count++;

				reset();
			}
		}

		function PT3(){

			while(Count <= 2){

			roota();
			ab();
				
				//1回目の結果のaをa2に、bをb2に代入
				if(Count == 1){

					a2 = a;
					b2 = b;
				}

				//2回目の結果のaをa3に、bをb3に代入
				if(Count == 2){

					a3 = a;
					b3 = b;
				}

				//問題を作成 √c + をQに加算
				Q += "√" + c + "-";

				Count++;

				reset();
			}
		}

		function PT4(){


		}

		//変数をリセット(コメントアウトしてるものはリセットしないほうがよい)
		function reset(){

			key = null;

			//var PT = 2; //問題パターン

			a = "";//数値(優先)
			b = "";//数値(優先)
			//c = null;//数値(優先)

			//var a2 = null;//数値
			//var a3 = null;//数値
			//var b2 = null;//数値
			//var b3 = null;//数値

			//var rootA = null;//根号のついた数値
			//var rootB = null;//根号のついた数値

			n = 2//計算用の数値
			i = 2//計算用の数値

			debug_soinsu.splice(0,debug_soinsu.length);
			array1.splice(0, array1.length);//素因数分解の結果を代入する変数
			list1.splice(0, list1.length);//素数の重複を代入する変数

			//var Count = null;//数値のカウント

			test = "";//Debug用

			//Q = null;//問題
			A1 = "";//解答
			A2 = "";//ユーザーから入力された解答

			btn = "";//フォームのボタン

			result = "";//結果1
			result2 = "";//結果2
		}


		//開発者モードの切り替え
		function DebugOn(){

			var debugid = document.getElementById("Debug");
			debugid.innerHTML ="<BR><BR>開発者モードがONです。<BR><BR>\
								Debug:<BR>\
								a(最終値) : " + a + "<BR>\
								b(最終値) : " + b + "<BR>\
								c(最終値) : " + c + "<BR>\
								b2(最終値):" + b2 + "<BR>\
								b3(最終値):" + b3 + "<BR>\
								素因数    : " + debug_soinsu + "<BR>\
								Q(問題)   : " + Q + "<BR>\
								A1(コンピューターの解答) : " + A1 + "<BR>\
								Debug終了"; 
		}

