Before Create - First lifecycle hook that's called immediately after a vue instance has been initialized.
Created - It's called just after the 'Before create' hook but the vue instance has set initial properties, data etc.
Before mount - It's called just before the instance is mounted on DOM. At this moment the template has been compiled.
Mounted - It's called once the template is ready with data and functional.
Before update - It's called when any changes are made to data that requires DOM to be updated.
Updated - It's called just after DOM has updated.
Before destroy It's a place where you can perform resource clean up before destroying the vue instance.
destroyed - It's get called when all vue instances have been destroyed. It will be triggered when run the destroy method on an object in code.