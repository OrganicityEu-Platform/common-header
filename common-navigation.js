(function ( $ ) {
 
    $.fn.organicityNavigation = function() {
		var nav = $('<nav class="navbar navbar-default"></nav>');
		var container_fluid = $('<div class="container-fluid"></div>');
		var navbar_header = $('<div class="navbar-header"><a class="navbar-brand" href="#"><img src="oc_logo.png" class="logo"></a></div>');
		var navbar = $('<div id="navbar" class="navbar-collapse collapse"></div>');

		var ul = $('<ul class="nav navbar-nav navbar-right"></ul>');

		var tools = $('<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tools <span class="caret"></span></a></li>');
		var tools_ul = $('<ul class="dropdown-menu"></ul>');
		tools_ul.append('<li class="dropdown-header">Nav header</li>');
		tools_ul.append('<li><a href="#">Action</a></li>');
		tools_ul.append('<li><a href="#">Another action</a></li>');
		tools_ul.append('<li><a href="#">Something else here</a></li>');
		tools_ul.append('<li role="separator" class="divider"></li>');
		tools_ul.append('<li class="dropdown-header">Nav header</li>');
		tools_ul.append('<li><a href="#">Separated link</a></li>');
		tools_ul.append('<li><a href="#">One more separated link</a></li>');
		ul.append(tools);

		var sign_in = $('<li><a href="#">Sign in</a></li>');
		sign_in.click(function() {
			sign_in.html('<div class="userCircle">DB</div>');
		});

		ul.append('<li><a href="#">APIs</a></li>');
		ul.append('<li><a href="#">Documents</a></li>');
		ul.append('<li><a href="#">Support</a></li>');
		ul.append(sign_in);

		tools.append(tools_ul);

		nav.append(container_fluid);
		container_fluid.append(navbar_header, navbar);
		navbar.append(ul);

        this.append(nav);
        return this;
    };
 
}( jQuery ));
