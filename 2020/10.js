const { chunk } = require("lodash")

let input = [145, 3, 157, 75, 84, 141, 40, 20, 60, 48, 15, 4, 2, 21, 129, 113, 54, 28, 69, 42, 34, 1, 155, 63, 151, 8, 139, 135, 33, 81, 70, 132, 150, 112, 102, 59, 154, 53, 144, 149, 116, 13, 41, 156, 85, 22, 165, 51, 14, 125, 52, 64, 16, 134, 110, 71, 107, 124, 164, 160, 10, 25, 66, 74, 161, 111, 122, 166, 140, 87, 126, 123, 146, 35, 91, 106, 133, 26, 77, 19, 86, 105, 39, 99, 76, 58, 31, 96, 78, 88, 168, 119, 27, 45, 9, 92, 138, 38, 97, 32, 7, 98, 167, 95, 55, 65]

const sampleInput1 = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4]
const sampleInput2 = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3]

{ // Part 1
    const sortedInput = input.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    const getAvailableAdaptersForJoltage = (joltage) => {
        const adapters = []
        for (const entry of sortedInput) {
            if (entry <= joltage) continue
            if (entry > joltage + 3) continue
            adapters.push(entry)
        }
        return adapters
    }

    const diffs = {}
    let targetJoltage = 0
    while (true) {
        const joltages = getAvailableAdaptersForJoltage(targetJoltage)
        if (!joltages.length) break

        const foundJoltage = joltages[0]
        const diff = foundJoltage - targetJoltage

        if (!diffs.hasOwnProperty(diff)) {
            diffs[diff] = 1
        } else {
            diffs[diff]++
        }

        targetJoltage = foundJoltage
    }
    if (!diffs.hasOwnProperty(3)) {
        diffs[3] = 1
    } else {
        diffs[3]++
    }

    console.log('[Part 1] result:', diffs[1] * diffs[3])
}

const Part2 = (input, expected) => {
    let sortedInput = input.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    const deviceJoltage = sortedInput[sortedInput.length - 1] + 3
    const zero = 0
    sortedInput = [zero, ...sortedInput, deviceJoltage]

    const isSequenceValid = (arr) => {
        // if (arr[0] > 3) return false

        for (let i = 1; i < arr.length; i++) {
            let first = arr[i - 1]
            let second = arr[i]
            if (second - first > 3) {
                return false
            }
        }
        return true
    }

    // break contigous sequences into small chunks for processing
    const chunks = []
    let index = 0
    while (index < sortedInput.length) {
        // this outer loop detects potential continuos chunk heads
        if (index === sortedInput.length) break
        let head = sortedInput[index++]
        let next = sortedInput[index]

        if (next == head + 1) {
            let group = [head]
            while (true) { // this inner loop builds continuos lists
                group.push(next)
                const prev = next
                next = sortedInput[++index]

                if (prev + 1 !== next) {
                    break
                }
            }
            if (group.length > 2) {
                chunks.push(group)
            }
        }
    }


    const doStep = (arr, acc) => {
        for (let i = 1; i < arr.length-1; i++) { // ignore the first & last one
            let current = arr[i]
            const newArr = arr.filter(el => el !== current)
            const key = newArr.join(', ')
            if (acc.has(key)) {
                continue // skip duplicates
            }
            const isValid = isSequenceValid(newArr)
            if (isValid) {
                acc.add(key)
                doStep(newArr, acc) // recurse to advance algorithm
            } else {
                continue // skip invalid series
            }
        }
    }

    let result = 1
    for (let chunk of chunks) {
        let acc = new Set([sortedInput.join(', ')])
        doStep(chunk, acc) // start algorithm
        result *= acc.size
    }

    console.log(`[Part 2] expected [${expected}] got [${result}]`)
}

Part2(sampleInput1, 8)
Part2(sampleInput2, 19208)
Part2(input, '?')

/*
Had to break algorithm into chunks because of hard memory limits LOL:

<--- Last few GCs --->

[934860:0000020C8F528890]   648464 ms: Mark-sweep 2044.4 (2052.5) -> 2042.5 (2052.5) MB, 421.7 / 0.0 ms  (average mu = 0.079, current mu = 0.007) allocation failure scavenge might not succeed
[934860:0000020C8F528890]   648887 ms: Mark-sweep 2044.5 (2052.5) -> 2042.5 (2052.5) MB, 420.9 / 0.0 ms  (average mu = 0.045, current mu = 0.007) allocation failure scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 00007FF71F05AB0F v8::internal::wasm::DisjointAllocationPool::~DisjointAllocationPool+74383
 2: 00007FF71F003746 v8::base::CPU::has_sse+65014
 3: 00007FF71F0045E6 v8::base::CPU::has_sse+68758
 4: 00007FF71F8694BE v8::Isolate::ReportExternalAllocationLimitReached+94
 5: 00007FF71F84E684 v8::SharedArrayBuffer::Externalize+772
 6: 00007FF71F70D85C v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1452
 7: 00007FF71F718E1A v8::internal::Heap::ProtectUnprotectedMemoryChunks+1258
 8: 00007FF71F715D41 v8::internal::Heap::PageFlagsAreConsistent+3233
 9: 00007FF71F70AF45 v8::internal::Heap::CollectGarbage+1413
10: 00007FF71F7095F5 v8::internal::Heap::AllocateExternalBackingStore+1397
11: 00007FF71F72A62F v8::internal::Factory::NewFillerObject+191
12: 00007FF71F46E8A1 v8::internal::interpreter::JumpTableTargetOffsets::iterator::operator=+1409
13: 00007FF71F8F0B1D v8::internal::SetupIsolateDelegate::SetupHeap+465869
14: 00007FF71F88A41A v8::internal::SetupIsolateDelegate::SetupHeap+46282
15: 000003BE617C3F04
*/
