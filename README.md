Chrome Extension - Protein Total
=========================================

This is a demonstration extension that was created after watching the pluralsight video
`Creating A Chrome Extension`, specifically the `A Browser Action Extension` module.  

## Setting up Chrome

The first thing that we will need to do is to enable `developer mode` for the chrome
extensions.  We can do this by accessing the extension page with the below url:   

        chrome://extensions

Once the extensions page is up there should be a checkbox on the top right labeled
`Developer mode`.  Clicking on this checkbox should bring a set of 3 buttons into
view, with the first being called `Load unpacked extension...`.   

### Loading our extension

Now that we have developer mode enabled, all that needs to be done for this extension
to be enabled is to load it unpacked.   

1. Click on the button `Load unpacked extension...`
2. Navigate to the `extension` directory of the current repo
3. All done

If things are setup correctly you should see a small icon in your menubar at the
top right which will display the popup for this extension.    

## Extension Permissions

This specific extension uses a couple of different permissions.  

1. Storage (Allow it to store state, clear and add)
2. Notifications (Send a message whenever we have hit our goal)
3. ContextMenus (Add a right click option for selected text to add to count

The one important thing to remember is that whenever you make a change to the manifests
file you must reload the plugin to be able to see those changes, everything else is
automatically reloaded.    
