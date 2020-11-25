// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDIuv70CaWkpIe_N7Da8liVMo1DIMHgLyI",
	authDomain: "elelogs-84c02.firebaseapp.com",
	databaseURL: "https://elelogs-84c02.firebaseio.com",
	projectId: "elelogs-84c02",
	storageBucket: "elelogs-84c02.appspot.com",
	messagingSenderId: "802894624166",
	appId: "1:802894624166:web:7342946ba6007c9982cb67"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

	const auth = firebase.auth();

	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
}

