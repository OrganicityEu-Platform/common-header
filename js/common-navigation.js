(function ( $ ) {

    $.fn.organicityNavigation = function(login_uri, signout_uri, token) {
		var roles = [];
		if(token && token.length > 0) {
			var jwt = jwt_decode(token);
			var family_name = jwt.family_name;
			var given_name = jwt.given_name;
			var username = jwt.preferred_username;
			var roles = jwt.realm_access.roles;
		}

        //Check for admin
		var isAdmin = roles.includes('administrator');
		//console.log('found', found);

		var ul = $('<ul class="nav navbar-nav navbar-right" style="margin-right: 0!important;"></ul>');

		var li2 = $('<li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Tools<b class="caret"></b></a></li>');
		var ul2 = $('<ul class="dropdown-menu"></ul>');
		var yamm_content2 = $('<div class="yamm-content"></div>');
		var row2 = $('<div class="row"></div>');

		li2.append(ul2);
		ul2.append(yamm_content2);
		yamm_content2.append(row2);

		var ul2_1 = $('<ul class="col-sm-2 list-unstyled"></ul>');
		row2.append(ul2_1);

		ul2_1.append('<li class="title">Management Tools</li>');
		ul2_1.append('<li class="subtitle"><p><a href="https://experimenters.organicity.eu">Experimenter Portal</a></p></li>');
		ul2_1.append('<li class="comment">Set up the parameters of your experiment</li>');
		ul2_1.append('<li class="subtitle"><p>Community Management</p></li>');
		ul2_1.append('<li class="comment">Invite participants to take part</li>');
		ul2_1.append('<li class="subtitle"><p>Facility Management</p></li>');
		ul2_1.append('<li class="comment">Control roles, assets, etc in your city</li>');

		var ul2_2 = $('<ul class="col-sm-2 list-unstyled"></ul>');
		row2.append(ul2_2);

		ul2_2.append('<li class="title">Explore and annotate data</li>');
		ul2_2.append('<li class="subtitle"><p>Urban Data Observatory</p></li>');
		ul2_2.append('<li class="comment">Browse assets</li>');
		ul2_2.append('<li class="subtitle"><p>Data Annotation Service</p></li>');
		ul2_2.append('<li class="comment">Annotate assets</li>');

		var ul2_3 = $('<ul class="col-sm-2 list-unstyled"></ul>');
		row2.append(ul2_3);

		ul2_3.append('<li class="title">Experimenter tools</li>');
		ul2_3.append('<li class="subtitle"><p>SensiNact</p></li>');
		ul2_3.append('<li class="comment">Foo bar</li>');
		ul2_3.append('<li class="subtitle"><p>Tinkerspace</p></li>');
		ul2_3.append('<li class="comment">Foo bar</li>');
		ul2_3.append('<li class="subtitle"><p>Smartphone Experimentation</p></li>');
		ul2_3.append('<li class="comment">Foo bar</li>');
		ul2_3.append('<li class="subtitle"><p>Web Socket Library</p></li>');
		ul2_3.append('<li class="comment">Foo bar</li>');
		ul2_3.append('<li class="subtitle"><p>TSmarT</p></li>');
		ul2_3.append('<li class="comment">Foo bar</li>');
		ul2_3.append('<li class="subtitle"><p>DUL Radio</p></li>');
		ul2_3.append('<li class="comment">Foo bar</li>');

		ul.append(li2);

		ul.append('<li><a href="#">APIs</a></li>');
		ul.append('<li><a href="#">Documents</a></li>');
		ul.append('<li><a href="#">Support</a></li>');

		if(username) {
			var profile = $('<li class="dropdown circle"><a style="padding:0" href="#" data-toggle="dropdown" class="dropdown-toggle"><div class="userCircle">' + given_name[0] + family_name[0] + '</div></a></li>');
			var ul_profile = $('<ul class="dropdown-menu" aria-labelledby="dropdownMenu1"></ul>');
			ul_profile.append($('<li class="dropdown-header">' + given_name + ' ' + family_name + '</li>'));
			//ul_profile.append($('<li><a href="#">Profile</a></li>'));
			ul_profile.append($('<li><a href="https://accounts.organicity.eu/my">Account</a></li>'));
			ul_profile.append($('<li>&nbsp;</li>'));
			ul_profile.append($('<li><a href="' + signout_uri + '">Sign out</a></li>'));
			profile.append(ul_profile);
			ul.append(profile);
		} else {
			var sign_in = $('<li><a href="#">Sign in</a></li>');
			sign_in.click(function() {
				window.location = login_uri;
			});
			ul.append(sign_in);
		}

        this.html(ul);
        return this;
    };
}( jQuery ));
