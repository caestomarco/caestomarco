<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-4"> {{ __('Asynchronous Process') }} </h2>
        <x-primary-button onclick="fetchData('https://jsonplaceholder.typicode.com/posts')">Load Data</x-primary-button>
    </x-slot>
    <div class="py-12 relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg relative min-h-screen"> {{-- LOADING INDICATOR --}} <div id="loading" class="absolute z-10 inset-0 overflow-y-auto hidden">
                    <div class="flex flex-col items-center justify-center min-h-screen">
                        <div class="absolute inset-0 -z-10">
                            <div class="absolute inset-0 bg-zinc-700/70"></div>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-live="polite" aria-busy="true" aria-labelledby="title-08a desc-08a" class="h-20 w-20">
                            <path d="M7 8H3V16H7V8Z" class="animate animate-bounce fill-cyan-500 " />
                            <path d="M14 8H10V16H14V8Z" class="animate animate-bounce fill-cyan-500 [animation-delay:.2s]" />
                            <path d="M21 8H17V16H21V8Z" class="animate animate-bounce fill-cyan-500 [animation-delay:.4s]" />
                        </svg>
                        <h1 class="text-2xl font-semibold text-cyan-500 text-center">Loading, please wait...</h1>
                    </div>
                </div>
                <div class="max-w-xl">
                    <section>
                        <h3 class="text-lg font-medium text-gray-900 underline">API Data</h3>
                        <ul id="api-data" class="space-y-2">
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </div> @push('additional-scripts') <script>
        const toast = document.getElementById('toast');
        const loading = document.getElementById('loading');
        const list = document.getElementById('api-data');
        const listItem = (title) => {
            return `
                    <li class="p-2 bg-slate-300">
                        ${title}
                        <x-primary-button onclick="createPost('${title}')" >Save</x-primary-button>
                    </li>
                    `
        }

        const createPost = async (title) => 
        {
            try {
                const response = await fetch('{{ route("add.post") }}', 
                    {
                        method: "POST",
                        headers: 
                        {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': '{{ csrf_token() }}',
                        },
                        body: JSON.stringify({
                            'title': title
                        })
                    }
                );

            } catch (error) {
                console.error(error);
            }
        }
        
        const fetchData = async (url) => {
            // PROMISE BASED
            // const response = await fetch(url).then(response => response.json()).then(json => console.log(json))

            loading.classList.toggle('hidden');

            // setTimeout(() => {
            //     alert("Hello");
            // }, 3000)

            setTimeout(async () => 
            {
                try
                {
                    const response = await fetch(url);
                    const data = await response.json();

                    data.forEach(element =>
                    {
                        list.innerHTML += listItem(element.title)
                    })
                }
                catch (error) 
                {
                    console.error(error);
                } 
                finally 
                {
                    loading.classList.toggle('hidden')
                }

            }, 1000);

        }
    </script> @endpush
</x-app-layout>