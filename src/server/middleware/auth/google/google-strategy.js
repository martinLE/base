'use strict'

import passport from 'passport';
import passportGoogleOauth2 from 'passport-google-oauth2';

import GoogleUser from './google-user.js';
import ProviderLookup from '../provider-lookup.js';
import UserRepository from '../../../repos/user-repository.js';


var GoogleStrategy = passportGoogleOauth2.Strategy;

module.exports = new GoogleStrategy({
  clientID:     Config.auth.google.clientID,
  clientSecret: Config.auth.google.clientSecret,
  callbackURL:  Config.auth.google.callbackURL,
  passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {

    var emailAddress = profile.email;
    var firstName = profile.name.givenName;
    var lastName = profile.name.familyName;

    var userRepo = new UserRepository();
    userRepo.createUser(emailAddress, firstName, lastName, ProviderLookup.Google, profile.id)
    .then(function(user){
        if(user){
          done(null, user);
        }else{
          done(null, null);
        }

    }).catch(function(err){
        done(err, null);
    });
  }
);
