Benchmarking Streaming JSON implementations
====

This is a simple project illustrating testing of various json implementaions that are based on streaming api, i.e. low memory footprint and unix like coding style.

The dummy jason as based on the data from the npm repository.

Intention is to try and add more and more implementaions or languages testing on this.


To run execute the ruby script at the project's root:

    ruby benchmark.rb
    
    
Requirment from any new folder is to have the executing program accept a file as a single argV param and have an executable named \*run\*.\* in the main benchmark folder. 