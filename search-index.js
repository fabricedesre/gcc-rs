var searchIndex = {};
searchIndex['gcc'] = {"items":[[3,"Config","gcc","Extra configuration to pass to gcc.",null,null],[3,"Tool","","Configuration used to represent an invocation of a C compiler.",null,null],[5,"compile_library","","Compile a library from the given set of input C files.",null,null],[0,"windows_registry","","A helper module to probe the Windows Registry when looking for\nwindows-specific tools.",null,null],[5,"find","gcc::windows_registry","Attempts to find a tool within an MSVC installation using the Windows\nregistry as a point to search from.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"option"}}],[5,"find_tool","","Similar to the `find` function above, this function will attempt the same\noperation (finding a MSVC tool in a local install) but instead returns a\n`Tool` which may be introspected.",null,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"option"}}],[11,"new","gcc","Construct a new instance of a blank set of configuration.",0,{"inputs":[{"name":"config"}],"output":{"name":"config"}}],[11,"include","","Add a directory to the `-I` or include path for headers",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"define","","Specify a `-D` variable with an optional value.",0,{"inputs":[{"name":"config"},{"name":"str"},{"name":"option"}],"output":{"name":"config"}}],[11,"object","","Add an arbitrary object file to link in",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"flag","","Add an arbitrary flag to the invocation of the compiler",0,{"inputs":[{"name":"config"},{"name":"str"}],"output":{"name":"config"}}],[11,"file","","Add a file which will be compiled",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"cpp","","Set C++ support.",0,{"inputs":[{"name":"config"},{"name":"bool"}],"output":{"name":"config"}}],[11,"cpp_link_stdlib","","Set the standard library to link against when compiling with C++\nsupport.",0,{"inputs":[{"name":"config"},{"name":"option"}],"output":{"name":"config"}}],[11,"cpp_set_stdlib","","Force the C++ compiler to use the specified standard library.",0,{"inputs":[{"name":"config"},{"name":"option"}],"output":{"name":"config"}}],[11,"target","","Configures the target this configuration will be compiling for.",0,{"inputs":[{"name":"config"},{"name":"str"}],"output":{"name":"config"}}],[11,"host","","Configures the host assumed by this configuration.",0,{"inputs":[{"name":"config"},{"name":"str"}],"output":{"name":"config"}}],[11,"opt_level","","Configures the optimization level of the generated object files.",0,{"inputs":[{"name":"config"},{"name":"u32"}],"output":{"name":"config"}}],[11,"debug","","Configures whether the compiler will emit debug information when\ngenerating object files.",0,{"inputs":[{"name":"config"},{"name":"bool"}],"output":{"name":"config"}}],[11,"out_dir","","Configures the output directory where all object files and static\nlibraries will be located.",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"compiler","","Configures the compiler to be used to produce output.",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"archiver","","Configures the tool used to assemble archives.",0,{"inputs":[{"name":"config"},{"name":"p"}],"output":{"name":"config"}}],[11,"cargo_metadata","","Define whether metadata should be emitted for cargo allowing it to\nautomatically link the binary. Defaults to `true`.",0,{"inputs":[{"name":"config"},{"name":"bool"}],"output":{"name":"config"}}],[11,"pic","","Configures whether the compiler will emit position independent code.",0,{"inputs":[{"name":"config"},{"name":"bool"}],"output":{"name":"config"}}],[11,"compile","","Run the compiler, generating the file `output`",0,{"inputs":[{"name":"config"},{"name":"str"}],"output":null}],[11,"get_compiler","","Get the compiler that's in use for this configuration.",0,{"inputs":[{"name":"config"}],"output":{"name":"tool"}}],[11,"to_command","","Converts this compiler into a `Command` that's ready to be run.",1,{"inputs":[{"name":"tool"}],"output":{"name":"command"}}],[11,"path","","Returns the path for this compiler.",1,{"inputs":[{"name":"tool"}],"output":{"name":"path"}}],[11,"args","","Returns the default set of arguments to the compiler needed to produce\nexecutables for the target this compiler generates.",1,null],[11,"env","","Returns the set of environment variables needed for this compiler to\noperate.",1,null]],"paths":[[3,"Config"],[3,"Tool"]]};
searchIndex['gcc_shim'] = {"items":[],"paths":[]};
initSearch(searchIndex);
