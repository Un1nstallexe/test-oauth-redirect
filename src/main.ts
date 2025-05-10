window.onload = function() {
  // Parse the VK access token from the URL fragment
  const params = new URLSearchParams(document.location.search);
  const code = params.get('code');
  console.log(code);
  // Redirect to the app with token via deep link
  if (code) {
    const redirectUrl = `sportlocator://?${params.toString()}`;
    window.location.replace(redirectUrl);
  } else {
    document.body.innerHTML = "Failed to authenticate with VK.";
  }
};
