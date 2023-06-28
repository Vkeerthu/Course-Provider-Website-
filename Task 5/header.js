const header = document.createElement('header');
header.innerHTML = `
<div class="container">
<nav class="nav">
		<a href="index.html" class="logo">SHAKTH</a>
		<ul class="nav-list">
				<li>
						<a href="index.html" class="nav-link">Home</a>
				</li>
				<li>
						<a href="index.html#course" class="nav-link">Courses</a>
				</li>
				<li>
						<a href="index.html#team" class="nav-link">Team</a>
				</li>
				<li>
						<a href="index.html#contact" class="nav-link">Contact us</a>
				</li>
		</ul>
</nav>
</div>
`;

document.body.appendChild(header);